import schoology from "../data/data.js";

const addItem = (field, item) => {
  schoology[field] = [
    ...schoology[field],
    { ...item, id: `${Date.now() + Math.random()}` },
  ];
};

const getFieldItem = (field) => schoology[field];

const removeItem = (field, id) => {
  schoology[field] = schoology[field].filter(
    (fieldItem) => fieldItem.id !== id
  );
};

const renameItem = (field, id, newName) => {
  schoology[field] = schoology[field].map((fieldItem) =>
    fieldItem.id === id ? { ...fieldItem, name: newName } : fieldItem
  );
};

const commonServices = { addItem, getFieldItem, removeItem, renameItem };

export default commonServices;
