import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormLogin() {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username: event.target.elements.username.value,
        password: event.target.elements.password.value,
      });

      // Vérifier si la réponse contient un token ou une indication de connexion réussie
      if (response.data.token) {
        console.log('Connexion réussie:', response.data);
        // Utilisez navigate pour rediriger l'utilisateur vers la page d'administration
        navigate('/admin');
      } else {
        // Si la réponse ne contient pas de token, le nom d'utilisateur ou le mot de passe est incorrect
        console.error('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    } catch (error) {
      // Si une erreur se produit, affichez le message d'erreur
      console.error('Erreur de connexion:', error.message);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormLogin;
