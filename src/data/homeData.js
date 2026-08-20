export const navLinks = [
  { label: 'Home', href: '/', hasDropdown: false },
  { label: 'About Us', href: '/about', hasDropdown: false },
  { label: 'Shop', href: '/shop', hasDropdown: true },
  { label: 'Blog', href: '/blog', hasDropdown: true },
  { label: 'Pages', href: '/pages', hasDropdown: true },
  { label: 'Contact', href: '/contact', hasDropdown: false },
]

export const aboutCards = [
  { id: 1, title: 'Restaurant', image: '/restaurant-website/images/about-restaurant.png' },
  { id: 2, title: 'Coctail Bar', image: '/restaurant-website/images/about-cocktail.png' },
  { id: 3, title: 'Private Dining', image: '/restaurant-website/images/about-dining.png' },
]

export const categoryTabs = [
  { id: 'dessert', label: 'Dessert', icon: 'cake' },
  { id: 'steak', label: 'Steak', icon: 'steak' },
  { id: 'coffee', label: 'Coffee', icon: 'coffee' },
  { id: 'burger', label: 'Burger', icon: 'burger' },
]

export const bbqMenuItems = [
  { id: 1, name: 'Sake BBQ sauce', desc: 'radish, black sesame seeds, coriander', price: '$9.00' },
  { id: 2, name: 'BBQ baby back ribs', desc: 'sticky Asian glaze, charred lime, chilli cashews', price: '$16.00' },
  { id: 3, name: 'Half smoked chicken', desc: 'miso butter glaze, charred wedge, sake bbq', price: '$134.00' },
  { id: 4, name: 'Dusted chicken wings', desc: 'tossed in hot sauce, pickled radish', price: '$140.00' },
]

export const discoverMenu = [
  {
    id: 1,
    title: 'Steaks & BBQ',
    desc: 'canonical classics to obscure tiki drinks',
    price: '$120',
    image: '/restaurant-website/images/discover-steaks.png',
  },
  {
    id: 2,
    title: 'Cocktails',
    desc: 'canonical classics to obscure tiki drinks',
    price: '$120',
    image: '/restaurant-website/images/discover-cocktails.png',
  },
]

export const featuredDishes = [
  {
    id: 1,
    name: 'Crispy Fried Chicken',
    oldPrice: '$14.85',
    price: '$10.85',
    image: '/restaurant-website/images/dish-fried-chicken.png',
    onSale: true,
  },
  {
    id: 2,
    name: 'Shroom Bacon Burger',
    oldPrice: '$21.76',
    price: '$11.76',
    image: '/restaurant-website/images/dish-burger.png',
    onSale: true,
  },
  {
    id: 3,
    name: 'Delicious Black Coffee',
    oldPrice: '$21.76',
    price: '$11.76',
    image: '/restaurant-website/images/dish-coffee.png',
    onSale: true,
  },

]

export const testimonials = [
  {
    id: 1,
    quote:
      'A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts.',
    name: 'Bratlee Hamint',
  },
  {
    id: 2,
    quote:
      'Every dish felt intentional, from plating to flavor. The kind of place you keep coming back to, and keep recommending to friends.',
    name: 'Alina Rhodes',
  },
  {
    id: 3,
    quote:
      'From the starter to dessert, everything was balanced and full of flavor. Easily one of the best meals we have had this year.',
    name: 'Devon Cole',
  },
]

export const experts = [
  { id: 1, name: 'Thomas Walim', role: 'Dessert specialist', image: '/restaurant-website/images/chef-thomas.png' },
  { id: 2, name: 'James Jhonson', role: 'Chef Master', image: '/restaurant-website/images/chef-james.png' },
  { id: 3, name: 'Room Minal', role: 'Dessert specialist', image: '/restaurant-website/images/chef-room.png' },
]

export const recentNews = [
  {
    id: 1,
    title: 'Creamy Chicken Alfredo',
    date: 'April 4, 2023',
    author: 'Willimes Thomas',
    image: '/restaurant-website/images/news-alfredo.jpg',
    avatar: '/restaurant-website/images/author.png',
  },
  {
    id: 2,
    title: 'Air Fryer Salmon',
    date: 'April 4, 2023',
    author: 'Willimes Thomas',
    image: '/restaurant-website/images/news-salmon.jpg',
    avatar: '/restaurant-website/images/author.png',
  },
]

export const instagramBg = '/restaurant-website/images/instagram-bg.jpg'

export const footerLinks = {
  about: ['Fredoka One', 'Special Dish', 'Reservation', 'Contact'],
  menu: ['Steaks', 'Burgers', 'Cocktails', 'Bar B Q', 'Desserts'],
}
