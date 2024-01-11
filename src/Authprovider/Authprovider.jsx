import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useQuery } from 'react-query';
import Item from '../Pages/Item/Item';

export const AuthContext = createContext();

const auth = getAuth(app);

const Authprovider = ({ children }) => {
    // for signin & signup
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    // all products data
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('Products.JSON')
            const data = await res.json();
            return data;
        }
    })
    console.log(products);
    // for filter system
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState('');
    console.log(selectedCategory);
    const handleInputChange = event => {
        setQuery(event.target.value)
    }
    console.log(query);
    // searching filter
    const filterItems = products.filter((product) => 
        product.productName.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    )
    // radio filter
    const handleChange = event => {
        setSelectedCategory(event.target.value)
    }
    // filter on click button 
    const handleClick = event => {
        setSelectedCategory(event.target.value)
    }

    const filteredData = (products, selected, query) => {
        let filteredProducts = products;
        // filtering Items on search
        if (query) {
            filteredProducts = filterItems;
        }
        // filtering Items on select
        console.log(selected);

        if (selected) {
            filteredProducts = filteredProducts.filter(({ newPrice, color, productCategory,
                category, productName }) =>
                category === selected ||
                color === selected ||
                productCategory === selected ||
                newPrice <= parseInt(selected) ||
                productName === selected)
        }

        return filteredProducts
        // .map(product => <Item key={product.id}
        // product={product} />);
    }
    const result = filteredData(products, selectedCategory, query);
    console.log(result);

    // console.log(user);
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    // verify email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    // sign In
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Log Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // reset password
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)

    }
    // google log in
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // facebook log in
    const facebookLogIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('user observing');
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUser,
        verifyEmail,
        forgetPassword,
        signIn,
        logOut,
        updateUser,
        googleLogIn,
        facebookLogIn,
        loading,
        user,
        products,
        handleChange,
        handleInputChange,
        query,
        result,
        handleClick
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;