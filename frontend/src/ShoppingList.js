import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:4000/items');
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async () => {
    if (!newItem.trim()) return;
    await axios.post('http://localhost:4000/items', { item: newItem });
    setNewItem('');
    fetchItems();
  };

  const updateItem = async (id) => {
    if (!editText.trim()) return;
    await axios.put(`http://localhost:4000/items/${id}`, { item: editText });
    setEditingId(null);
    setEditText('');
    fetchItems();
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:4000/items/${id}`);
    fetchItems();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Shopping List</h2>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editingId === item.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => updateItem(item.id)}>Save</button>
              </>
            ) : (
              <>
                {item.item}
                <button onClick={() => {
                  setEditingId(item.id);
                  setEditText(item.item);
                }}>Edit</button>
              </>
            )}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
