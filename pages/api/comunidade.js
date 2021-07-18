import { SiteClient } from 'datocms-client';

export default async function(request, response) {

    if(request.method === 'POST') {
        const TOKEN = '77b6f50b4a3a97348972b7e6a202ca';
        const client = new SiteClient(TOKEN);
    
        // validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "968629",
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/murilozano.png",
            // creatorSlug: "murilozano"
        })
    
        response.json({
            dados: 'teste',
            registroCriado: registroCriado
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET apenas no POST'
    })

} 