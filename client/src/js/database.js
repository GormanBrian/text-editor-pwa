import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const textDb = await openDB("textEditor", 1);
  const tx = textDb.transaction("textEditor", "readwrite");
  const store = tx.objectStore("text");

  const request = store.add(content);
  const result = await request;

  console.log("Successfully added content to the database\n", result);
};

// Method that gets all the content from the database
export const getDb = async () => {
  const textDb = await openDB("textEditor", 1);
  const tx = textDb.transaction("textEditor", "readonly");
  const store = tx.objectStore("text");

  const request = store.getAll();
  const result = await request;

  console.log("result.value", result);
  return result;
};

initdb();
