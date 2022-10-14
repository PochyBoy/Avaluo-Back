const nodemailer = require('nodemailer');

export function enviar_mail(pnombre, receptor) {

    let userEmail = 'test@11millionproject.com';
    let passEmail  = 'ahhhcomochingas';
    let transporter = nodemailer.createTransport({
        host: '11millionproject.com',
        port: '465',
        secure: 'false',
        auth: {
            user: userEmail,
            pass: passEmail
        }
    });

    // let userEmail = 'sistemaavaluos@bmsclab.net';
    
    // let transporter = nodemailer.createTransport({
    //     host: '172.16.14.76',
    //     port: '25',
    //     secure: 'false',
    //     auth: {
    //         user: userEmail,
            
    //     }
    // });

    let mail_options = {
        from: userEmail,
        to: receptor,
        subject: 'Bienvenido a Huella de Carbono',
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${pnombre}</span> 
                            a la aplicación
                        </p>
                    </td>
                </tr>
                <tr bgcolor="#fff">
                    <td style="text-align:center">
                        <p style="color: #000">¡Un mundo de servicios a su disposición!</p>
                    </td>
                </tr>
            </table>
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};

