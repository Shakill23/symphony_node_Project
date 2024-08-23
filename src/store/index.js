import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
import { applyToken } from '@/service/AuthenticateUser.js'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
const apiURL = 'https://symphony-node-project-1.onrender.com/'
/*eslint-disable */

// Should you reload the page after logging in
applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setProduct(state, value) {
      state.product = value
    },

  },
  actions: {
    // ==== User ========
    async fetchUsers(context) {
      try {
        const results = await (await axios.get(`${apiURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}users/${id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async register(context, payload) {
      try {
        const { message, err, token } = await (await axios.post(`${apiURL}users/register`, payload)).data
      // const data = await (await axios.post(`${apiURL}users/register`, payload)).data
      // console.log(data)

        if (token) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          router.push({ name: 'login' })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateUser(context, payload) {
      console.log(payload);
      
      try {
        const { message, err } = await (await axios.patch(`${apiURL}users/update/${payload.userID}`, payload)).data
        if (message) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteUser(context, userID) {
      try {
          const response = await axios.delete(`${apiURL}users/delete/${userID}`);
          console.log(response.data); // Log the entire response data to inspect its structure
  
          const { message, err } = response.data;
  
          if (message) {
            console.log(message);
            context.dispatch('fetchUsers');
          }
      } catch (e) {
          toast.error(e.message, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
      }
  },
    // ===== LOGIN =======
    // async login(context, payload) {
    //   try {
    //     const { message, token } = await (await axios.post(`${apiURL}users/login`, payload)).data

    //     if (token) {
    //       toast.success(`${message}😎`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //       context.commit('setUser', {
    //         message,
    //         token
    //       })
    //       cookies.set('LegitUser', { token, message, result })
    //       applyToken(token)
    //       router.push({ name: 'products' })
    //     } else {
    //       toast.error(`${message}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // },

    // ==== Product =====
    async fetchProducts(context) {
      try {
        const results  = await (await axios.get(`${apiURL}products`)).data
        console.log('here');
        
        if (results) {
          context.commit('setProducts', results)
        } else {
          router.push({ name: 'login' })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }

    },
    async fetchProduct(context, id) {
      try {
        const result= await (await axios.get(`${apiURL}products/${id}`)).data
        console.log(result);
        if (result) {
          context.commit('setProduct', result)
        } else {
          toast.error(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })

        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async addProduct(context, payload) {
      try {
        const {message,err} = await (await axios.post(`${apiURL}products/addProduct`, payload)).data
        if (message) {
          context.dispatch('fetchProducts')
          toast.success(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } 
      catch (err) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateProduct(context, payload) {
      try {
        const { message } = await (await axios.patch(`${apiURL}products/update/${payload.productID}`, payload)).data
        if (message) {
          context.dispatch('fetchProducts')
          toast.success(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (err) {
        toast.error(`${err.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteProduct(context, id) {
      try {
        const { message } = await (await axios.delete(`${apiURL}products/delete/${id}`)).data
        if (message) {
          context.dispatch('fetchProducts')
          toast.success(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    }

  },
  modules: {
  }
})