import { AuthProvider } from "@arcana/auth"
import { ProvideAuth } from "@arcana/auth-react"

import { ARCANA_APP_ID } from "../../utils/constants/arcana"

import { ArcanaProviderProps } from "./ArcanaAuth.types"

const provider = new AuthProvider(ARCANA_APP_ID)

const ArcanaProvider = ({ children }: ArcanaProviderProps) => {
  return <ProvideAuth provider={provider}>{children}</ProvideAuth>
}

export default ArcanaProvider
