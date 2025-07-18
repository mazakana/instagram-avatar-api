export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: "Usuário não informado" });
  }

  try {
    const response = await fetch(`https://www.instagram.com/${username}/`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      }
    });

    const html = await response.text();
    const match = html.match(/"profile_pic_url_hd":"([^"]+)"/);

    if (!match || !match[1]) {
      return res.status(404).json({ error: "Imagem não encontrada" });
    }

    const profilePic = match[1].replace(/\\u0026/g, "&");

    return res.status(200).json({ profile_pic: profilePic });
  } catch (e) {
    return res.status(500).json({ error: "Erro ao buscar o perfil" });
  }
}