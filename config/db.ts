import mongoose from "mongoose";
import config from 'config'
import Logger from "./logger";

export async function connect() {
  const dbUri = config.get<string>("dbUri")
 
  try {

    await mongoose.connect(dbUri)
    Logger.info("Conectado ao banco de dados")
    
  } catch(error) {
    Logger.error("Não foi possível conectar")
    Logger.error(`Erro: ${error}` )
    process.exit(1)
  }
}
