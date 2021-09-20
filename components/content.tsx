import Header from './header';

interface Props {
  headerTitle?: string;
}

const Content: React.FC<Props> = ({ headerTitle, children }) => {
  return (
    <>
      <Header title={ headerTitle } />
      { children }
    </>
  );
};

export default Content;
