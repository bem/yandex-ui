import { useEffect } from 'react';
import { navigate } from 'gatsby';

const IndexPage = () => {
    useEffect(() => {
        navigate('/guidelines/start');
    }, []);

    return null;
};

export default IndexPage;
