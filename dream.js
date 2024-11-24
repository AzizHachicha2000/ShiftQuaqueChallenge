function analyzeDream() {
    const dreamInput = document.getElementById('dreamInput').value.trim();
    const resultDiv = document.getElementById('result');
    const analysisText = document.getElementById('analysis');
    const visualizationDiv = document.getElementById('visualization');
    
    if (!dreamInput) {
      alert("Please enter a dream description.");
      return;
    }
  
    // Simulate AI-based analysis with basic string matching
    const dreamAnalysis = analyzeSymbols(dreamInput);
    const dreamImage = generateVisualization(dreamAnalysis);
  
    analysisText.textContent = dreamAnalysis;
    visualizationDiv.innerHTML = `<img src="${dreamImage}" alt="Dream Visualization">`;
    
    resultDiv.style.display = 'block';
  }
  
  // Simulate analysis of dream symbols
  function analyzeSymbols(dreamDescription) {
    if (dreamDescription.includes('flying')) {
      return "Flying often represents freedom, escape, or a desire for control over your life. If your flying dream was positive, it may reflect a sense of freedom or empowerment. To encourage more uplifting dreams like this, consider pursuing activities that give you a sense of control and fulfillment. If the dream felt negative (e.g., you were flying but couldn't control the flight), it might indicate stress or lack of direction. In this case, work on gaining more stability and control in your waking life. Actions: Engage in activities that boost your confidence, like setting and achieving personal goals. Practice creative expressions, such as drawing or writing, to channel your feelings of freedom. Take steps to regain control over areas of your life where you feel overwhelmed.";
    } else if (dreamDescription.includes('water')) {
      return "Water represents emotions, the subconscious, and cleansing. If the water in your dream was clear and peaceful, it may symbolize emotional clarity and balance. To continue having such positive dreams, focus on maintaining emotional well-being through self-care and emotional expression. If the water was turbulent or murky, it might indicate emotional turmoil or repressed feelings. To stop negative dreams and heal yourself, work on understanding and processing these emotions. Actions: Engage in calming activities like deep breathing, yoga, or taking relaxing baths to maintain emotional balance. Keep a journal to reflect on your emotions and stay in tune with your feelings. Connect with nature to restore emotional harmony.";
    } else if (dreamDescription.includes('falling')) {
      return "Falling may suggest insecurity, fear of failure, or loss of control. If the dream of falling felt positive (e.g., you fell but landed safely or felt a sense of release), it may represent a willingness to let go or face fears. Encourage positive falling dreams by embracing vulnerability and letting go of perfectionism. However, if falling was associated with fear or anxiety, it reflects insecurity or loss of control in your waking life. In this case, work on building your confidence and restoring control. Actions: Embrace challenges by taking calculated risks and learning from them. Practice self-compassion and allow yourself to make mistakes without self-judgment. Let go of unnecessary fears and embrace personal growth.";
    } else if (dreamDescription.includes('teeth')) {
      return "Dreams of losing teeth are commonly associated with concerns about appearance, aging, or personal power. If your dream of losing teeth felt neutral or positive (e.g., the loss of teeth was followed by growth or empowerment), it could symbolize shedding old habits or embracing change. Encourage such positive dreams by focusing on self-empowerment and embracing change in your life. If the dream was negative, it may reflect fears about aging, self-image, or personal loss. In this case, focus on healing your self-image and addressing any fears related to change. Actions: Focus on personal development and self-empowerment. Embrace change and growth in your life, whether it be through career or relationships. Practice self-love and affirmations to enhance your self-image.";
    } else if (dreamDescription.includes('snake')) {
      return "Snakes in dreams can represent transformation, danger, or hidden fears. If the snake in your dream was not threatening, it may symbolize transformation and healing. To invite more positive dreams, focus on personal growth and the process of shedding old, limiting beliefs. If the snake was threatening or scary, it could represent unresolved fears or hidden threats. Work on confronting these fears and finding healing to stop negative dreams. Actions: Embrace personal transformation by setting goals for growth and self-improvement. Practice letting go of outdated beliefs or fears that may hold you back. Engage in healing practices such as therapy or journaling to understand and embrace change.";
    } 
    else if (dreamDescription.includes('house')) {
      return "Houses in dreams often represent the self or various aspects of your life. If the house in your dream was large, spacious, and well-kept, it may indicate personal growth, stability, and harmony. To attract more positive dreams like this, focus on creating balance and peace in your waking life. If the house was in disrepair, it might reflect feelings of instability or emotional neglect. Work on addressing areas of your life that need attention to foster healing. Actions: Organize your home environment or workspace to create a sense of order. Take time for self-care and focus on nurturing your emotional and physical well-being.";
    } else if (dreamDescription.includes('bird')) {
      return "Birds often symbolize freedom, aspirations, and spirituality. If the bird in your dream was soaring high, it could indicate a sense of liberation or a call to pursue your dreams. To encourage more dreams like this, set your sights on your aspirations and take actions toward achieving them. If the bird was trapped or injured, it could symbolize feelings of being restricted or hindered. Work on breaking free from limiting beliefs or situations that are holding you back. Actions: Set clear, achievable goals that inspire you. Practice mindfulness to stay connected to your inner guidance and sense of freedom.";
    } else if (dreamDescription.includes('fire')) {
      return "Fire can represent passion, transformation, or destruction. If the fire in your dream was warm and comforting, it could symbolize creative energy, enthusiasm, or emotional warmth. Encourage more positive dreams by engaging in activities that fuel your passion and creativity. If the fire was destructive, it might reflect anger, frustration, or emotional turmoil. To stop negative dreams, focus on processing your emotions and releasing any pent-up frustration. Actions: Channel your energy into creative outlets like art, writing, or dance. Practice relaxation techniques to manage stress and prevent emotional burnout.";
    } else if (dreamDescription.includes('death')) {
      return "Dreams of death often symbolize endings, transformation, or fear of change. If the dream was peaceful (e.g., a loved one passed away and you felt calm), it may represent letting go of old patterns or an acceptance of change. To invite more positive endings, embrace the idea of personal growth and transformation. If the death was traumatic or caused distress, it may indicate a fear of loss or an unresolved emotional issue. Work on confronting these fears to heal and stop negative dreams. Actions: Practice meditation or mindfulness to process emotional pain. Seek professional help if the fear of loss is overwhelming, and focus on healing old wounds.";
    } else {
      return "Your dream is a complex mix of your subconscious mind, offering various insights based on your emotional state. Regardless of the dream, understanding its emotional content is key to gaining insights into your subconscious mind. If the dream was positive, continue nurturing the positive aspects of your life that contributed to the dream's feelings. If the dream felt negative, use it as an opportunity to explore and heal the emotions or experiences causing distress. Actions: Keep a dream journal to track recurring positive symbols or themes. Continue engaging in activities that bring you peace, joy, and fulfillment. Set goals that align with your values and foster personal growth.";
    }
  }
  
  
  // Simulate generating an image based on analysis
  
  function generateVisualization(analysis) {
    if (analysis.includes("flying")) {
      return "https://via.placeholder.com/600x300.png?text=Flying+Dream+Visualization";
    } else if (analysis.includes("water")) {
      return "water.jpg";
    } else if (analysis.includes("falling")) {
      return "https://via.placeholder.com/600x300.png?text=Falling+Dream+Visualization";
    } else if (analysis.includes("teeth")) {
      return "https://via.placeholder.com/600x300.png?text=Teeth+Dream+Visualization";
    } else if (analysis.includes("snake")) {
      return "https://via.placeholder.com/600x300.png?text=Snake+Dream+Visualization";
    } else if (analysis.includes("house")) {
      return "https://via.placeholder.com/600x300.png?text=House+Dream+Visualization";
    } else if (analysis.includes("bird")) {
      return "https://via.placeholder.com/600x300.png?text=Bird+Dream+Visualization";
    } else if (analysis.includes("fire")) {
      return "https://via.placeholder.com/600x300.png?text=Fire+Dream+Visualization";
    } else if (analysis.includes("death")) {
      return "https://via.placeholder.com/600x300.png?text=Death+Dream+Visualization";
    } else {
      return "https://via.placeholder.com/600x300.png?text=General+Dream+Visualization";
    }
  }
