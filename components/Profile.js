function Profile() {
  return (
    <div style={{
      display: 'flex',    // Use flex layout for the whole container
      flexDirection: 'row',  // Align children horizontally
      alignItems: 'flex-start',  // Align items to the start of the flex direction
      justifyContent: 'center', // Center the items horizontally
      marginTop: '100px', // Space above this section
    }}>
      <img src="profile.png" alt="My Photo" 
      style={{
        width: '380px',  // Fixed width
        height: '380px', // Fixed height
        borderRadius: '50%', // Make round
        objectFit: 'cover',
        marginTop: '60px',
        marginRight: '50px', // Space between the image and text
      }} />

      <div style={{
        textAlign: 'left', // Ensure text alignment is consistent
        display: 'flex',
        flexDirection: 'column', // Stack text items vertically
        justifyContent: 'center', // Center text items vertically relative to the image
      }}>
        <h1 style={{ 
          fontWeight: 'bold',
          fontSize: '60px',
          marginBottom: '0', // Reduce space below the header
          marginLeft: '-0px'
        }}>
         Tumaris Paris
        </h1>
        <h2 style={{ 
          fontWeight: 'bold',
          fontStyle: 'italic', 
          fontSize: '20px',
          marginTop: '0'  // Reduce space above the sub-header
        }}>
          A Bit About Me
        </h2>
        <p style={{ 
          fontWeight: 'light', 
          fontSize: '16px', 
          width: '250px',  // Fixed width for a more controlled layout
        }}>
          I am a Computer Science and Software Engineering student at University of Washington, Bothell campus. 
          Fun facts about me: I am Uyghur, I have three cats, and I speak 4 different languages!
        </p>
      </div>
    </div>
  );
}

export default Profile;
