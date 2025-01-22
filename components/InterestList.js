/** @jsxImportSource react */
"use client"
import React, { useState } from 'react';

function InterestList() {
    // Initialize the state with an array of interests
    const [interests, setInterests] = useState(['Skiing', 'Ice-skating', 'Baking', 'Playing Piano', 
                                                'Dancing', 'Singing', 'Painting', 'Watching Turkish Series', 
                                                'Cybersecurity', 'Ethical Hacking', 'iOS Development', 
                                                'Artificial Intelligence']);

    // Function to rotate the list by moving the first item to the end
    function reorderList() {
        setInterests(prevInterests => [...prevInterests.slice(1), prevInterests[0]]);
    }

    // Render the component
    return (
        <div style={{ 
            textAlign: 'right', 
            marginLeft: '300px', // Adjust the margin to properly align with the rest of the content
            marginTop: '-130px', 
            width: 'fit-content' // Adjust the width as necessary
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between', // Spreads out the title and button across the available width
                alignItems: 'center' // Aligns items vertically in the center
            }}>
                <h2 style={{ 
                    fontWeight: 'bold', 
                    fontStyle: 'italic',
                    fontSize: '20px',
                    margin: '0', // Removes margin around the h2 for tighter spacing
                }}>
                    My Interests
                </h2>

                <button 
                  onClick={reorderList} 
                  style={{
                    fontSize: '14px', 
                    fontWeight: 'bold',
                    backgroundColor: '#92CAFC', 
                    color: '#4059AD',
                    borderRadius: '20%', // Making the button round
                    padding: '3px 4px', // Adjust size accordingly
                    border: 'none', // Remove default border
                    outline: 'none', // Remove focus outline
                    cursor: 'pointer', // Cursor pointer indicates clickable item
                  }}>
                  Reorder
                </button>
            </div>
            <ul style={{ 
                listStyle: 'disc inside', 
                padding: '0', 
                textAlign: 'left', 
                marginTop: '5px' }}> {/* Add bullets and align left */}
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li> // Use index as key to prevent key issue on reorder
                ))}
            </ul>
        </div>
    );
}

export default InterestList;
