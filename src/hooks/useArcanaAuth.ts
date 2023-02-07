import { useEffect, useState } from "react"

import { AuthProvider, CHAIN } from "@arcana/auth"

import { ARCANA_APP_ID } from "../utils/constants/arcana"

//Config
const appAdd = ARCANA_APP_ID
const auth = new AuthProvider(appAdd, {
  position: "left",
  theme: "dark",
  alwaysVisible: false,
  chainConfig: {
    chainId: CHAIN.POLYGON_MUMBAI_TESTNET,
    rpcUrl: "",
  },
})

function useArcanaAuth() {
  const [initialized, setInitialized] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const initializeAuth = async () => {
    await auth.init()
    setInitialized(true)
  }

  //Social Login
  const login = async (socialType: string) => {
    if (initialized) {
      await auth.loginWithSocial(socialType)
      setLoggedIn(true)
    }
  }

  //Email Link/ Passwordless login
  const loginWithLink = async (email: string) => {
    if (initialized) {
      await auth.loginWithLink(email)
      setLoggedIn(true)
    }
  }

  //Getting user Accounts
  const getAccounts = async () => {
    if (initialized) {
      const accounts = await auth.provider.request({ method: "eth_accounts" })
      return accounts
    }
  }

  //Getting User Info
  const getUser = async () => {
    const info = await auth.getUser()
    return info
  }

  //Logout
  const logout = async () => {
    if (initialized && loggedIn) {
      await auth.logout()
      setLoggedIn(false)
    }
  }

  useEffect(() => {
    const checkLogin = async () => {
      await auth.init()
      if (await auth.isLoggedIn()) {
        setLoggedIn(true)
      }
    }
    checkLogin()
  }, [])

  return {
    initializeAuth,
    loggedIn,
    login,
    loginWithLink,
    getAccounts,
    getUser,
    logout,
    initialized,
  }
}

export default useArcanaAuth
