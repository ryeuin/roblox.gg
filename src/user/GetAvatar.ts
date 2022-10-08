import phin from "phin";

/** Gets user's avatar */
export default async function ({ username, id }) {
  if (!id && !username)
    throw new Error("You must provide either a username or id");
  if (!id) {
    let id = await phin(
      `https://api.roblox.com/users/get-by-username?username=${username}`
    ).then((res) => {
      // @ts-ignore
      return JSON.parse(res.body).Id;
    });

    let res = await phin(
      `https://thumbnails.roblox.com/v1/users/avatar-headshot?size=420x420&format=png&userIds=${id}`
    );
    // @ts-ignore
    return JSON.parse(res.body).data[0].imageUrl;
  } else {
    let res = await phin(
      `https://thumbnails.roblox.com/v1/users/avatar-headshot?size=420x420&format=png&userIds=${id}`
    );
    // @ts-ignore
    return JSON.parse(res.body).data[0].imageUrl;
  }
}
