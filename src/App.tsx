import './App.css';
import Card from './components/card';
import { Form } from './components/form';
import Section from './components/section';

function App() {
  return (
    <Section
      width="100%"
      height="100vh"
      backgroundColor="#e43535"
      padding="50px 20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Form
        backgroundColor="#232323"
        padding="20px"
        borderRadius="10px"
        height="80vh"
        width="300px"
      />
      <Card
        width="50%"
        height="100vh"
        backgroundColor="#fff"
        margin="0 0 0 20px"
        boxShadow="0 0 7px #000"
      />
    </Section>
  );
}

export default App;
