




function toggleTextVisibility(card) {
  const heading = card.querySelector('.card-heading');
  const paragraph = card.querySelector('.card-paragraph');

  if (heading.style.display !== 'none') {
    heading.style.display = 'none';
    paragraph.style.display = 'block';
  } else {
    heading.style.display = 'block';
    paragraph.style.display = 'none';
  }
}

document.querySelectorAll('.card-paragraph').forEach(paragraph => {
  paragraph.style.display = 'none';
});

const products = [
  {
    id: 1,
    title: 'Tvorba webových stránek',
    description: 'Navrhujeme a vyvíjíme moderní, responzivní weby přizpůsobené vašim potřebám a cílové skupině.',
    price: 'od 5 000 Kč',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 2,
    title: 'E-shopy na míru',
    description: 'Vytváříme funkční a přehledné e-shopy, které podporují růst vašeho podnikání a zvyšují konverze.',
    price: 'od 50 000 Kč',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 3,
    title: 'Správa a údržba webů',
    description: 'Postaráme se o bezproblémový chod vašeho webu, jeho aktualizace, zabezpečení i technickou podporu.',
    price: 'od 2 000 Kč',
    image: 'https://placehold.co/600x400',
  },
];

function openModal(productId) {
  const product = products.find(p => p.id === productId);
  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalTitle').textContent = product.title;
  document.getElementById('modalDescription').textContent = product.description;
  document.getElementById('modalPrice').textContent = product.price;
  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', () => {
    const productId = parseInt(button.getAttribute('data-product-id'));
    openModal(productId);
  });
});
