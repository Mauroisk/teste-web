import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const app = express();

const fetchPageData = async (page) => {
    try {
        const { data } = await axios.get(`https://webscraper.io/test-sites/e-commerce/static/computers/laptops?page=${page}`);
        const $ = cheerio.load(data);
        let products = [];

        $('.thumbnail').each((index, element) => {
            const title = $(element).find('.title').text().trim();
            const priceText = $(element).find('.price').text().trim();
            const price = parseFloat(priceText.replace('$', ''));
            const description = $(element).find('.description.card-text').text().trim();
            const reviewsText = $(element).find('.review-count.float-end').text().trim();
            const ratingText = $(element).find('.ratings p[data-rating]').attr('data-rating');

            const reviews = reviewsText ? reviewsText.replace(/[^0-9]/g, '') : 'N/A';
            const rating = ratingText || 'N/A';

            // Filtra apenas produtos com "Lenovo" no título
            if (title.toLowerCase().includes('lenovo')) {
                products.push({ title, price, description, reviews, rating });
            }
        });

        // Verifica se há mais páginas
        const hasMorePages = $('.pagination li.active').next().length > 0;
        return { products, hasMorePages };
    } catch (error) {
        console.error(`Erro ao buscar os dados da página ${page}:`, error);
        return { products: [], hasMorePages: false };
    }
};

app.get('/notebooks-lenovo', async (req, res) => {
    try {
        let allProducts = [];
        let currentPage = 1;
        let hasMorePages = true;

        while (hasMorePages) {
            console.log(`Buscando dados da página ${currentPage}...`);
            const { products, hasMorePages: morePages } = await fetchPageData(currentPage);

            // Mesmo se não houver produtos Lenovo, continua para a próxima página
            allProducts = allProducts.concat(products);
            currentPage++;
            hasMorePages = morePages;
        }

        // Ordena os produtos do mais barato para o mais caro
        allProducts.sort((a, b) => a.price - b.price);

        // Exibe os produtos no terminal de forma organizada
        allProducts.forEach((product, index) => {
            console.log(`Produto ${index + 1}:`);
            console.log(`Título: ${product.title}`);
            console.log(`Preço: $${product.price.toFixed(2)}`);
            console.log(`Descrição: ${product.description}`);
            console.log(`Reviews: ${product.reviews}`);
            console.log(`Classificação: ${product.rating} estrelas`);
            console.log('-----------------------------------------------------');
        });

        // Retorna os produtos como JSON na API
        res.json(allProducts);
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}/notebooks-lenovo`);
});
