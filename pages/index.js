import styled from 'styled-components';
import Link from 'next/link';
import Content from 'components/content';

const Container = styled.div`
  color: blue;
  margin: 50px;
`;

const Text = styled.div`
  color: ${(props) => (props.color ? props.color : 'dark')};
`;

export default function Home() {
  return (
    <Container>
      <Content headerTitle="header">
        test
        <Text color='red'>Hello!!</Text>
        <Link href='/about' passHref>
          <button>about</button>
        </Link>
      </Content>
    </Container>
  );
}
