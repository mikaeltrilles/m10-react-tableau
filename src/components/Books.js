import { useState } from "react";
import BookRow from "./BookRow";

export default function Books() {
  //* Tableau de livres
  const [books, setBooks] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Il était une fois',
      author: 'Georges DUPONT',
      price: 13,
      editable: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'Il était deux fois',
      author: 'Stéphanie DUPONT',
      price: 4.5,
      editable: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'Il était trois fois',
      author: 'Stéphanie DE MONACO',
      price: 1,
      editable: false,
    },
  ]);

  //* Fonction de modification d'un livre
  function toggleEditBook(book) {
    setBooks(
      books.map(b => b.id === book.id
        ? { ...b, editable: !b.editable }
        : b
      )
    );
  }

  //* Fonction de suppression d'un livre
  function deleteBook(id) {
    setBooks(
      books.filter(b => b.id !== id)
    );
  }

  //* Fonction d'ajout d'un livre
  function addBook() {
    setBooks([
      ...books,
      {
        id: crypto.randomUUID(),
        title: '',
        author: '',
        price: '',
        editable: true,
      }
    ]);
    console.log(books);
  }


  return (
    <>
      <h2 className="text-center fs-1 fw-bold">Liste des livres</h2>
      {/* bouton ajout d'un livre sur la largeur du tableau */}
      <button
        className="btn btn-secondary my-2 w-100"
        onClick={addBook}>
        Ajouter un livre
      </button>
      <table className="table table-dark table-hover">
        {/* En tete de la table */}
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        {/* Corps de la table */}
        <tbody>
          {books.map(book => (
            <BookRow
              //? clé unique pour chaque ligne
              key={book.id}
              //? objet livre à afficher 
              book={book}
              //? fonction de suppression d'un livre
              deleteBook={() => deleteBook(book.id)}  
              //? fonction de modification d'un livre
              toggleEditBook={() => toggleEditBook(book)}
              //? fonction d'ajout d'un livre
              addBook={() => addBook()} 
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
