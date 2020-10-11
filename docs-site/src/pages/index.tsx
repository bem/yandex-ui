import { useEffect } from 'react';
/* eslint-disable-next-line */
import { navigate } from 'gatsby';

const IndexPage = () => {
    useEffect(() => {
        navigate('/guidelines/start');
    }, []);
    return null;
};

export default IndexPage;
