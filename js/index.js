// add/remove products from array
const products = [
  {
    title: 'Napster',
    logo: '../assets/napster.png',
    description: 'music sucks',
    link: 'https://www.google.com',
  },
  {
    title: 'Consequatur Tempore Inventore',
    logo: '../assets/logo2.jpg',
    description:
      'Quia temporibus molestiae. Error et odit doloremque tenetur iure tempore consequuntur numquam lab',
    link: 'https://www.google.com',
  },
  {
    title: 'Consequatur',
    logo: '../assets/image3.jpg',
    description:
      'Harum temporibus numquam nisi aliquid quibusdam. Minima amet voluptates voluptas dicta aut. Officiis voluptatem quis libero aut aut',
    link: 'https://www.google.com',
  },
];

const cardCreator = (obj) => {
  const card = document.createElement('div');
  const title = document.createElement('h3');
  const image = document.createElement('img');
  const description = document.createElement('p');
  const button = document.createElement('a');

  title.textContent = obj.title;
  image.src = obj.logo;
  description.textContent = obj.description;
  button.textContent = 'Buy Now!';
  button.href = obj.link;

  card.classList.add('product-card');
  title.classList.add('product-title');
  image.classList.add('product-image');
  description.classList.add('product-desc');
  button.classList.add('product-button');

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(description);
  card.appendChild(button);

  return card;
};

const root = document.querySelector('.middle-content');

products.forEach((product) => {
  const card = cardCreator(product);
  root.appendChild(card);
});
