# Spaced Repetition

An application to enter an adoption site, and mimic standing in line and adopting a pet.

This application was written using React and Node.js.

[GitHub page](https://github.com/nickjang/petful-client) for the client.

[site]: https://petful-client-dun.vercel.app/

## Table of contents

- [API](#api)
- [Technologies](#technologies)
- [Acknowledgments](#acknowledgments)
- [Links](#links)

## API

Base URL: `https://nickjang-petful.herokuapp.com/`

- `/people` Endpoint
  - GET
    - `/people`
      - Get people in queue in order.
        - example:
          - response: `{ people: ['John', 'Apple'] }`
  - POST
    - `/people`
      - Add a person to the end of queue, given a name.
        - example:
          - request: `{ name: 'John' }`
          - response: `{ person: 'John' }`
- `/cat` or `/dog` Endpoints
  - GET
    - `/cat` or `/dog`
      - Get the pet at the front of the pet's queue. 
        - example: 
          - response:
            - `{ 
                  age: 3, 
                  breed: 'Golden Retriever', 
                  description: 'A smiling golden-brown golden retreiver listening to music.', 
                  gender: 'Male', 
                  imageURL: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
                  name: 'Zim', 
                  story: 'Owner Passed away' 
               }`
  - DELETE
    - `/cat` or `/dog`
      - Dequeue a person and pet, and return the person and pet.
        - example: 
          - response: 
            - `{
                  person: 'John',
                  dog: { 
                    age: 3, 
                    breed: 'Golden Retriever', 
                    description: 'A smiling golden-brown golden retreiver listening to music.', 
                    gender: 'Male', 
                    imageURL: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
                    name: 'Zim', 
                    story: 'Owner Passed away' 
                  }
              }`

## Technologies

This application was written using React, Node.js, Express, Mocha/Chai, and CSS.

## Acknowledgments

Thank you to [Thinkful](https://thinkful.com/), where this project was completed.

## Links

* [The Petful application][site]
* [Petful client GitHub page](https://github.com/nickjang/petful-client)