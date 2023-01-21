import React from 'react';
import {requestDog, requestDogSuccess, requestDogError} from './actions/actions'

//функция скачивания с сервера веб-адреса картинки с собакой
//в нее подается элемент dispatch в который оборачиваются функции запросов из actions
const fetchDog = (dispatch) => {
  //начинается скачивание веб-адреса картинки с сервера, соответствующую функцию оборачиваем в dispatch 
  dispatch(requestDog());
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then (
      //скачивание веб-адреса картинки с сервера может быть успешно завершено, соответствующую функцию оборачиваем в dispatch 
      data => dispatch(requestDogSuccess(data)),
      //скачивание веб-адреса картинки с севера может окончиться с ошибкой, соответствующую функцию оборачиваем в dispatch 
      err => dispatch(requestDogError(err))
    )
}

// Компонент проекта
class App extends React.Component {
  render () {
    return (
      <div>
        {/*Кнопка запуска скачивания с сервера веб-адреса картинки с собакой */}
        <button onClick={() => fetchDog(this.props.dispatch)}>Show Dog</button>
        {
          //из props получаем результат о проведении указанного процесса
          this.props.loading
        ? 
          <p>Loading...</p>
        :
          //из props получаем результат об ошибке, котороая возникла при проведении указанного процесса
          this.props.error 
        ? 
          <p>Error, try again</p> 
        : 
        //изображаем картинку, веб-адрес которой получен в результате проведенного скачивания
        <p><img alt="Items" src={this.props.url}/></p>
        }
      </div>      
    )
  }  
}

export default App;
