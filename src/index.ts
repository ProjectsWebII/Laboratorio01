import * as express from "express"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Producto} from "./entity/Producto"
import helmet from "helmet"
import cors = require("cors")
import Routes from "./routes"

const PORT = process.env.PORT || 3000;
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(cors());
    app.use(helmet());
    app.use(express.json())

app.use('/',Routes);
    // start express server
    app.listen(PORT,()=>{console.log(`El servidor a sido leventado en el puerto:${PORT} Exitosamente`
        ,'YohelRojas'
    );
})

}).catch(error => console.log(error))
