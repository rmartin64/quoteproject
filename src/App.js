import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayIndex: Math.floor(Math.random() * 30)
    }
    this.newQuote = this.newQuote.bind(this);
  }
newQuote() {
  this.setState(
    {
      arrayIndex: Math.floor(Math.random() * 30)
    }
  )
}
  render() {
    const QUOTEARRAY = [
      {author: 'Kurdish Proverb', quote: 'Do not throw the arrow which will return against you.'},
     {author: 'Thomas Jefferson', quote: 'Banking establishments are more dangerous than standing armies.'},
      {author: 'Robert Brent', quote: 'Chemistry means the difference between poverty and starvation and the abundant life.'},
      {author: 'Unknown', quote: 'The bureaucracy is expanding to meet the needs of the expanding bureaucracy.'},
      {author: 'Hammurabi\'s code', quote: 'To bring about the rule of righteousness in the land, so that the strong should not harm the weak.'},
      {author: 'E.B. White', quote: 'Everything in life is somewhere else, and you get there in a car.'},
      {author: 'Helder Camara', quote: 'When I give food to the poor, they call me a saint. When I ask why the poor have no food, they call me a communist.'},
      {author: 'Euripedes', quote: 'The wisest men follow their own direction.'},
      {author: 'Aristotle', quote: 'The whole is greater than the sum of its parts.'},
      {author: 'Steve Wozniak', quote: 'Never trust a computer you can\'t throw out a window.'},
      {author: 'The Magna Carta', quote: 'No freeman shall be taken, imprisoned, or in any other way destroyed, except by the lawful judgement of his peers.'},
      {author: 'Publius Cyrus', quote: 'Everything is worth what its purchaser will pay for it.'},
      {author: 'Louis XIV', quote: 'I am the state.'},
      {author: 'Native American Song', quote: 'We do not inherit the earth from our ancestors, we borrow it from our children.'},
      {author: 'Albert Einstein', quote: 'Compound interest is the most powerful force in the universe.'},
      {author: 'Thomas Edison', quote: 'We will make electricity so cheap that only the rich will burn candles.'},
      {author: 'Antione de Saint-Exupry', quote: 'A designer knows that he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.'},
      {author: 'Lao Tzu', quote: 'Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime.'},
      {author: 'Native American Saying', quote: 'If you chase two rabbits, you will lose them both.'},
      {author: 'Benjamin Franklin', quote: 'Any society that would give up a little liberty to gain a little security will deserve neither and lose both.'},
      {author: 'Sir Francis Bacon', quote: 'Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.'},
      {author: 'Aristophanes', quote: 'It is from their foes, not their friends, that cities learn the lesson of building high walls.'},
      {author: 'Oscar Wilde', quote: 'The only thing worse than being talked about is not being talked about.'},
      {author: 'Hippocrates', quote: 'As for diseases, make a habit of two things - to help, or at least, to do no harm.'},
      {author: 'Confucius', quote: 'The man who moves a mountain begins by carrying away small stones.'},
      {author: 'William Shakespeare', quote: 'If music be the food of love, play on.'},
      {author: 'Andre Gide', quote: 'One doesn\'t discover new lands without losing sight of the shore.'},
      {author: 'Wendell Phillips', quote: 'What gunpowder did for war, the printing press has done for the mind.'},
      {author: 'Unknown', quote: 'You can\'t direct the wind, but you can adjust your sails.'},
      {author: 'Napoleon Bonaparte', quote: 'You would make a ship sail against the winds and currents by lighting a bonfire under her deck? I have no time for such nonsense.'},
    ]
    return(
      <div id='quote-box' className='container-fluid'>
        <p id='text' className='text-center'>{`"${QUOTEARRAY[this.state.arrayIndex].quote}"`}</p>
        <p id='author' className='text-right'>- {QUOTEARRAY[this.state.arrayIndex].author}</p>
        <div className='row' id='rowing'>
          <div className='col-xs-4'>
            <a href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(QUOTEARRAY[this.state.arrayIndex].quote)}"+- ${encodeURIComponent(QUOTEARRAY[this.state.arrayIndex].author)}`} target='_blank' id='tweet-quote'>
          <button id='tweetbutton' className='btn btn-outline-default'>Tweet quote</button>
          </a>
        </div>
        <div className='col-xs-4 col-xs-offset-3 col-md-offset-4'>
          <button id='new-quote' className='btn btn-outline-default' onClick={this.newQuote}>New quote</button>
        </div>
        </div>
      </div>

    )
  }
}


export default App;
