# 🎫 Processo seletivo Neki - Mobile

Aplicativo mobile para gerenciamento de eventos com autenticação de administradores.

## 🚀 Tecnologias

- React Native
- TypeScript
- JavaScript (ES6+)
- Expo (ou React Native CLI)
- React Navigation
- Axios (para requisições HTTP)

## 📋 Funcionalidades

- ✅ Tela de login de administrador
- ✅ Tela de cadastro de administrador
- ✅ Home com listagem de eventos
- ✅ Criar novos eventos
- ✅ Editar eventos existentes
- ✅ Excluir eventos
- ✅ Interface nativa para Android e iOS
- ✅ Armazenamento seguro de token JWT

## 🔧 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/)
- [VSCode](https://code.visualstudio.com/) (recomendado)

### Para desenvolvimento com Expo:
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Aplicativo Expo Go no seu celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

### Para desenvolvimento com React Native CLI:
- [Android Studio](https://developer.android.com/studio) (para Android)
- [Xcode](https://developer.apple.com/xcode/) (para iOS - apenas macOS)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/)

## 📦 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/aprimora-mobile.git
cd aprimora-mobile
```

### 2. Instale as dependências

Usando npm:
```bash
npm install
```

Ou usando yarn:
```bash
yarn install
```

### 3. Configure a conexão com o backend

Edite o arquivo de configuração da API (`src/services/api.ts`) e ajuste a URL base:

```typescript
const API_URL = 'http://SEU_IP:8080/api';
```

**Importante**: 
- Para testar no dispositivo físico, use o IP da sua máquina (não use `localhost`)
- Para emulador Android: você pode usar `10.0.2.2:8080`
- Para simulador iOS: você pode usar `localhost:8080`

### 4. Execute o projeto

#### Com Expo:

```bash
npm start
# ou
expo start
```

Depois escaneie o QR Code com:
- **Android**: App Expo Go
- **iOS**: Câmera nativa do iPhone

#### Com React Native CLI:

Para Android:
```bash
npm run android
# ou
npx react-native run-android
```

Para iOS (apenas macOS):
```bash
npm run ios
# ou
npx react-native run-ios
```

### 5. Acesse as funcionalidades

- **Login**: Acesse a tela de login e entre com suas credenciais
- **Cadastro**: Crie uma nova conta de administrador
- **Home**: Visualize todos os eventos cadastrados
- **Gerenciar Eventos**: Crie, edite ou exclua eventos conforme necessário

## 🎨 Estrutura do Projeto

```
Serratec-Neki-Web/
├── node_modules/
├── public/
│   └── assets/           # Imagens e recursos
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── EventCard.css
│   │   ├── EventCard.jsx
│   │   ├── EventModal.css
│   │   ├── EventModal.jsx
│   │   ├── Header.css
│   │   └── Header.jsx
│   ├── context/          # Context API
│   │   └── AuthContext.jsx
│   ├── pages/            # Páginas da aplicação
│   │   ├── Cadastro.css
│   │   ├── Cadastro.jsx
│   │   ├── Home.css
│   │   ├── Home.jsx
│   │   ├── Login.css
│   │   └── Login.jsx
│   ├── service/          # Serviços de API
│   │   ├── api.js
│   │   ├── App.css
│   │   └── App.jsx
│   ├── index.css
│   ├── index.html
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 🔐 Fluxo de Autenticação

1. Cadastre um administrador na tela de cadastro
2. Faça login com as credenciais criadas
3. O token JWT será armazenado de forma segura (AsyncStorage)
4. Acesse a home e gerencie os eventos
5. O token é enviado automaticamente em todas as requisições

## 🛠️ Scripts Disponíveis

### Expo:
- `npm start` - Inicia o Metro Bundler
- `npm run android` - Abre no emulador/dispositivo Android
- `npm run ios` - Abre no simulador iOS
- `npm run web` - Abre no navegador

### React Native CLI:
- `npm start` - Inicia o Metro Bundler
- `npm run android` - Compila e executa no Android
- `npm run ios` - Compila e executa no iOS
- `npm test` - Executa os testes

## 🌐 Integração com Backend

Este app mobile consome a API REST do Processo seletivo Neki - backend. Certifique-se de:

- O backend está rodando e acessível pela rede
- Use o IP correto da máquina (não `localhost` se estiver testando em dispositivo físico)
- O CORS está configurado corretamente no backend
- As rotas da API estão acessíveis

### Testando a conexão:

```bash
# Descubra o IP da sua máquina:
# Windows
ipconfig

# macOS/Linux
ifconfig
```

## 📱 Telas Disponíveis

### Login
Tela de autenticação onde administradores fazem login no sistema.

### Cadastro
Tela para registro de novos administradores com validação de campos.

### Home
Dashboard principal com:
- Lista de todos os eventos
- Pull-to-refresh para atualizar
- Botão para criar novo evento
- Cards com opções de editar e excluir

### Criar/Editar Evento
Formulário para adicionar ou modificar informações de eventos.

## 🐛 Troubleshooting

### Erro de conexão com a API
- Verifique se o backend está rodando
- Confirme se está usando o IP correto (não `localhost`)
- Desative firewall temporariamente para testes

### App não inicia
```bash
# Limpe o cache
npm start -- --reset-cache

# ou com Expo
expo start -c
```

### Problemas com dependências
```bash
# Remove node_modules e reinstala
rm -rf node_modules
npm install
```

## 👨‍💻 Autor

**Alexandre Lício da Silva Morais**

Desenvolvido como parte do processo seletivo Residência NEKI 2025.
