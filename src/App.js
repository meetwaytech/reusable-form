import './App.css';
import ReusableForm from './components/ReusableForm';

function App() {

  const template = {
    header: 'Header 1',
    fields: [
      {
        title: 'First Name',
        type: 'text',
        name: 'firstName',
        validationProps:{
          required:'first name is required'
        }
      },
      {
        title: 'Last Name',
        type: 'text',
        name: 'lastName',
        validationProps:{
          required:'last name is required'
        }
      },
      {
        title: 'Phone',
        type: 'number',
        name: 'phone'
      }
    ]
  }

  return (
    <div className="App main-container">
      <ReusableForm template={template} />
    </div>
  );
}

export default App;
