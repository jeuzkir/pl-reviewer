import { useEffect } from 'react';
import { navigate } from 'gatsby';

// Redirect to Python index page (aka Python Introduction)
// Source: https://stackoverflow.com/a/56246923
const Index = () => {
  useEffect(() => {
    navigate('/python/');
  }, []);
  return null;
};

export default Index;