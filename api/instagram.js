export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Usuário não informado.' });
  }

  try {
    const response = await fetch(`https://www.instagram.com/${username}/?__a=1&__d=dis`);
    if (!response.ok) {
      throw new Error('Erro ao buscar perfil.');
    }

    const data = await response.json();

    const avatarUrl =
      data.graphql?.user?.profile_pic_url_hd ||
      data.graphql?.user?.profile_pic_url ||
      null;

    if (!avatarUrl) {
      return res.status(404).json({ error: 'Imagem de perfil não encontrada.' });
    }

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.redirect(avatarUrl);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar avatar.', details: error.message });
  }
}
