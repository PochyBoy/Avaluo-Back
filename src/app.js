import express from "express";
import cors from "cors";
import usuarioRoutes from './routes/usuario.routes'
import asignacionRoutes from './routes/asignacion.routes'
import asignacionslaRoutes from './routes/asignacionsla.routes'
import bancaRoutes from './routes/banca.routes'
import bienRoutes from './routes/bien.routes'
import municipioRoutes from './routes/municipio.routes'
import profesionRoutes from './routes/profesion.routes'
import tipodebienRoutes from './routes/tipodebien.routes'
import avaluadorRoutes from './routes/avaluador.routes'
import solicitanteRoutes from './routes/solicitante.routes'
import solicitudRoutes from './routes/solicitud.routes'
import conveniosRoutes from './routes/convenios.routes'
import tipo_de_persona from './routes/tipodepersona.routes'
import documentodesolicitantemov from './routes/documentodesolicitudmov.routes'
import documentodesolicitantecat from './routes/documentodesolicitudcat.routes'
import ubicaciondesolicitud from './routes/ubicaciondesolicitud.routes'
import valoracion from './routes/valoracion.router'
import ubicaciondesolicitudv2 from './routes/ubicaciondesolicitudv2.routes'
import ubicaciondesolicitudput from './routes/ubicaciondesolicitudput.routes'
import solicitudput from './routes/solicitudput.routes'
import solicitudemail from './routes/solicitudemail.routes'
import morgan from "morgan";

import config from "./config";
const app = express();

const path = require('path')


const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpect = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Server SQL API Online",
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: [`${path.join(__dirname, './controllers/*.js')}`]
}

// settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


// Routes
app.use("/api", usuarioRoutes);
app.use("/api", asignacionRoutes);
app.use("/api", asignacionslaRoutes);
app.use("/api", bancaRoutes);
app.use("/api", bienRoutes);
app.use("/api", municipioRoutes);
app.use("/api", profesionRoutes);
app.use("/api", tipodebienRoutes);
app.use("/api", avaluadorRoutes);
app.use("/api", solicitanteRoutes);
app.use("/api", solicitudRoutes);
app.use("/api", conveniosRoutes);
app.use('/api', tipo_de_persona)
app.use('/api', documentodesolicitantemov)
app.use('/api', documentodesolicitantecat)
app.use('/api', ubicaciondesolicitud)
app.use('/api', valoracion)
app.use('/api', ubicaciondesolicitudv2)
app.use('/api', ubicaciondesolicitudput)
app.use('/api', solicitudput)
app.use('/api', solicitudemail)
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpect)))

export default app;
