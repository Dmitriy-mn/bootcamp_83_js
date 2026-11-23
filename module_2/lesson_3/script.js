// -------------------------------------- 6

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "pro";
// let canConnect;

//  false || true
// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// free !== free => false
// if(sub !== "free") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }


// let canConnect = sub === "pro" || sub === "vip" ? true : false;


// console.log("canConnect", canConnect);








/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnD = false;

//                      true && true && true
const canOpenChat = isOnline && isFriend && !isDnD;

console.log("canOpenChat", canOpenChat);






