import { useState } from "react";

export default function BookRow({
  book,
  deleteBook,
  toggleEditBook,
}) {
  const [title, setTitle] = useState(book.title); // Titre du livre
  const [author, setAuthor] = useState(book.author);  // Auteur du livre
  const [price, setPrice] = useState(book.price); // Prix du livre

  function handleChange(e) {  // Fonction de modification d'un livre
    const inputValue = e.target.value;
    switch (e.target.name) {  // On vérifie le nom de l'input
      case 'title':
        setTitle(inputValue); // On modifie le titre
        book.title = inputValue;
        return;
      case 'author':
        setAuthor(inputValue);
        book.author = inputValue;
        return;
      case 'price':
        setPrice(inputValue);
        book.price = inputValue;
        return;
    }
  }

  return (
    <tr>
      {book.editable ? (  // Si le livre est éditable
        <>
          <td>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={title} />
          </td>
          <td>
            <input
              type="text"
              name="author"
              onChange={handleChange}
              value={author} />
          </td>
          <td>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              value={price} />
          </td>
        </>
      ) : ( // Sinon
        <>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.price} €</td>
        </>
      )}
      <td className="text-center">
        <a
          onClick={toggleEditBook}
          // Si le livre est éditable, on affiche un bouton vert, sinon un bouton jaune
          className={`btn btn-sm btn-${book.editable ? 'success' : 'warning'} me-1`}
        >
          {/* Si le livre est éditable, on affiche un check, sinon un crayon */}
          {book.editable ? '✔︎' : '✎'}
        </a>
        <a
          onClick={deleteBook}
          className="btn btn-sm btn-danger">✖︎</a>
      </td>
    </tr>
  );
};
