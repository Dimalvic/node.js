import * as fs from 'fs'
import axios from 'axios'

const jsonFilePath = process.argv[2]

if (!jsonFilePath) {
    console.error('Не вказано шлях до файла')
}

const dirPath = './' + jsonFilePath.replace('.json', '')

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log(`Створено папку: ${dirPath}`);
}

const links: string[] = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

for(let one of links){
    try {
        let response = await axios.get(one);
        const htmlContent = response.data;
        fs.writeFileSync(dirPath + '/' + one.replace('https://', '').split('/')[0] + '.html', htmlContent);
        console.log(`Збережено: ${one}`);
    } catch (error) {
        console.error(`Помилка ${one}: ${error}`);
    }
}
