

const Home = () => import('./components/Home.vue')

//importamos los componentes para la opcion BLOGS
const NuevoBlog = () => import('./components/blogs/Nuevo.vue')
const MostrarBlog = () => import('./components/blogs/Mostrar.vue')
const EditarBlog = () => import('./components/blogs/Editar.vue')

//importamos los componentes para la opcion BOOKS
const NuevoBook = () => import('./components/books/Nuevo.vue')
const MostrarBook = () => import('./components/books/Mostrar.vue')
const EditarBook = () => import('./components/books/Editar.vue')

//importamos los componentes para la opcion MOVIES
const NuevoMovie = () => import('./components/movies/Nuevo.vue')
const MostrarMovie = () => import('./components/movies/Mostrar.vue')
const EditarMovie = () => import('./components/movies/Editar.vue')

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/blogs",
    name: "mostrarBlogs",
    component: MostrarBlog
  },

  {
    path: "/blog/nuevo",
    name: "nuevoBlog",
    component: NuevoBlog
  },

  {
    path: "/blog/:id",
    name: "editarBlog",
    component: EditarBlog
  },

  {
    path: "/books",
    name: "mostrarBooks",
    component: MostrarBook
  },

  {
    path: "/book/nuevo",
    name: "nuevoBook",
    component: NuevoBook
  },

  {
    path: "/book/:id",
    name: "editarBook",
    component: EditarBook
  },

  {
    path: "/movies",
    name: "mostrarMovies",
    component: MostrarMovie
  },

  {
    path: "/movie/nuevo",
    name: "nuevoMovie",
    component: NuevoMovie
  },

  {
    path: "/movie/:id",
    name: "editarMovie",
    component: EditarMovie
  },
];