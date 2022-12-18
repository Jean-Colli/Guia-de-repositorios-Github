import React from 'react'

import { ItemContainer, Buttons, Repositorio } from './styles'

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
}
  return (
    <ItemContainer >
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <Buttons>
        <Repositorio href={repo.html_url} target="_blank">Repositorio</Repositorio>
        <button className="remover" onClick={handleRemove}>Remover</button>
      </Buttons>
      <hr />
    </ItemContainer>
  )

}


export default ItemRepo;