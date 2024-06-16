document.addEventListener('DOMContentLoaded', function() {
      // Select elements
      const categoryDropdown = document.getElementById('category');
      const subcategoryDropdown = document.getElementById('subcategory');

      // Subcategory options based on category
      const subcategoryOptions = {
        'Technical Issue': ['Login Problem', 'Connection Issue', 'Bug Report'],
        'Account Problem': ['Password Reset', 'Profile Settings', 'Subscription Issue'],
        'Payment Issue': ['Payment Not Processed', 'Refund Request', 'Billing Inquiry']
        // Add more categories and corresponding subcategories as needed
      };

      // Function to update subcategory dropdown options based on selected category
      function updateSubcategories() {
        const selectedCategory = categoryDropdown.value;
        // Clear current options
        subcategoryDropdown.innerHTML = '<option value="">Select Subcategory</option>';

        // Populate subcategory options
        if (selectedCategory && subcategoryOptions[selectedCategory]) {
          subcategoryOptions[selectedCategory].forEach(function(option) {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            subcategoryDropdown.appendChild(optionElement);
          });
        }
      }

      // Event listener for category change
      categoryDropdown.addEventListener('change', updateSubcategories);
    });