import React, { useContext, useEffect } from 'react' ;
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser(); // looks at token, passes to backend to validate
        // eslint-disable-next-line
    }, []) // run as soon as component loads

    return (
        <div className='grid-2'>
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    );
}

export default Home
