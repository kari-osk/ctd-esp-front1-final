import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCharacters, searchCharacterSelector, setSearch } from '../../features/character/characterSlice';
import "./filtros.css";

const Filtros = () => {

  const dispatch = useDispatch()
  const search = useSelector(searchCharacterSelector)


  return (
    <div className="filtros">
      <label for="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        value={search}
        onChange={(event) => {
          dispatch(setSearch(event.target.value))
          dispatch(fetchAsyncCharacters())
        }}
      />
    </div>
  );
};

export default Filtros;
