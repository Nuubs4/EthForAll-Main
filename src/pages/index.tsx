import React, { useEffect, useState } from "react"

import { useAuth } from "@arcana/auth-react"

import useArcanaAuth from "../hooks/useArcanaAuth"
import { ArcanaUserInfo } from "../utils/types/ArcanaUser"

const HomePage = () => {
  const auth = useAuth()

  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [account, setAccount] = useState("")
  const [info, setInfo] = useState<ArcanaUserInfo | null>(null)

  const {
    initializeAuth,
    loggedIn,
    getAccounts,
    getUser,
    login,
    loginWithLink,
    logout,
    initialized,
  } = useArcanaAuth()

  const initialize = async () => {
    await initializeAuth()
  }

  const handleLogout = async () => {
    await logout()
  }

  useEffect(() => {
    initialize()
  }, [])

  useEffect(() => {
    const loadDetails = async () => {
      if (initialized) {
        if (loggedIn) {
          const acc = (await getAccounts()) as Array<string>
          setAccount(acc[0])

          const userInfo = await getUser()
          setInfo(userInfo)

          setLoading(false)
        } else {
          setLoading(false)
        }
      }
    }

    loadDetails()
  }, [initialized, loggedIn])

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <div className="center h-screen w-screen">
      <h1>AUTHENTICATION</h1>
      {/* <div>{JSON.stringify(auth)}</div> */}
      <div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : !loading && loggedIn ? (
          <div>
            <h2 className="sub-heading">Logged In</h2>
            <h3>Welcome {account}</h3>
            <h3>you're logged in successfully.</h3>
            <button className="big-button" onClick={handleLogout}>
              Logout
            </button>
            <div className="mt-20 w-1/3 max-w-6xl whitespace-pre-wrap text-center">
              {JSON.stringify(info)}
            </div>
          </div>
        ) : (
          <div className="box">
            <h2 className="sub-heading">Select a login</h2>
            <div className="options">
              <button className="big-button" onClick={() => login("google")}>
                Google Login
              </button>
              <button className="big-button" onClick={() => login("twitch")}>
                Twitch Login
              </button>
              <button className="big-button" onClick={() => login("discord")}>
                Discord Login
              </button>
              <button className="big-button" onClick={() => login("twitter")}>
                Twitter Login
              </button>
            </div>
            <div className="form">
              <input
                value={email}
                type="text"
                placeholder="Enter email"
                onChange={handleEmailChange}
              />
              <button className="big-button" onClick={() => loginWithLink(email)}>
                Login with link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
