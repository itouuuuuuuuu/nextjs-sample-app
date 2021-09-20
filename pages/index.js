import styled from 'styled-components';
import Link from 'next/link';
import Content from 'components/Content';
import useSWR from 'swr';

const fetcher = () => fetch('/api/hello');

const Profile = () => {
  const { data, error } = useSWR('/api/hello', fetcher);

  if(error) return <div>failed to load</div>;
  if(!data) return <div>loading...</div>;

  console.log(data?.name);
  return <div>hello {data?.name}!</div>;
};

export default function Home() {
  return (
    <Container>
      <Content headerTitle="header">
        test
        <Text color='red'>text</Text>
        <Profile />
        <Link href='/about' passHref><button>about</button></Link>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  color: blue;
  margin: 50px;
`;

const Text = styled.div`
  color: ${(props) => (props.color ? props.color : 'dark')};
`;
