document.addEventListener('DOMContentLoaded', function () {
    const companyInfo = document.getElementById('company-info');

    const leetCodeCompanies = [
        {
            name: 'Google',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { "name": "Race Car", "frequency": 72 },
                { "name": "Two Sum", "frequency": 46 },
                { "name": "My Calendar I", "frequency": 44 },
                { "name": "Logger Rate Limiter", "frequency": 35 },
                { "name": "Shortest Path in a Grid with Obstacles Elimination", "frequency": 34 },
                { "name": "Step-By-Step Directions From a Binary Tree Node to Another", "frequency": 34 },
                { "name": "Stock Price Fluctuation", "frequency": 34 },
                { "name": "Find Leaves of Binary Tree", "frequency": 33 },
                { "name": "Roman to Integer", "frequency": 30 },
                { "name": "Number of Islands", "frequency": 24 },
                { "name": "Longest String Chain", "frequency": 23 },
                { "name": "The Earliest Moment When Everyone Become Friends", "frequency": 21 },
                { "name": "Amount of New Area Painted Each Day", "frequency": 20 },
                { "name": "Random Pick with Weight", "frequency": 20 },
                { "name": "Find All Possible Recipes from Given Supplies", "frequency": 19 },
                { "name": "Decode String", "frequency": 19 },
                { "name": "Meeting Rooms II", "frequency": 19 },
                { "name": "Text Justification", "frequency": 18 },
                { "name": "Range Module", "frequency": 18 },
                { "name": "Longest Increasing Path in a Matrix", "frequency": 16 },
                { "name": "Merge Intervals", "frequency": 16 },
                { "name": "Detect Squares", "frequency": 15 },
                { "name": "Valid Parentheses", "frequency": 15 },
                { "name": "Longest Consecutive Sequence", "frequency": 14 },
                { "name": "Detonate the Maximum Bombs", "frequency": 13 },
                { "name": "Unique Paths", "frequency": 13 },
                { "name": "Course Schedule II", "frequency": 13 },
                { "name": "Maximum Number of Visible Points", "frequency": 13 },
                { "name": "Median of Two Sorted Arrays", "frequency": 13 },
                { "name": "Insert Interval", "frequency": 12 },
                { "name": "Longest Common Prefix", "frequency": 12 },
                { "name": "Guess the Word", "frequency": 12 },
                { "name": "Trapping Rain Water", "frequency": 12 },
                { "name": "First Bad Version", "frequency": 12 },
                { "name": "LRU Cache", "frequency": 12 },
                { "name": "Shortest Way to Form String", "frequency": 12 },
                { "name": "Filling Bookcase Shelves", "frequency": 11 },
                { "name": "Evaluate Reverse Polish Notation", "frequency": 11 },
                { "name": "Snapshot Array", "frequency": 11 },
                { "name": "Sliding Window Maximum", "frequency": 11 }
            ]
        },
        {
            name: 'Meta',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Minimum Remove to Make Valid Parentheses', frequency: 45, link: 'https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/' },
                { name: 'Valid Palindrome II', frequency: 38, link: 'https://leetcode.com/problems/valid-palindrome-ii/' },
                { name: 'Buildings With an Ocean View', frequency: 34, link: 'https://leetcode.com/problems/buildings-with-an-ocean-view/' },
                { name: 'Binary Tree Vertical Order Traversal', frequency: 33, link: 'https://leetcode.com/problems/binary-tree-vertical-order-traversal/' },
                { name: 'Kth Largest Element in an Array', frequency: 31, link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
                { name: 'Random Pick with Weight', frequency: 28, link: 'https://leetcode.com/problems/random-pick-with-weight/' },
                { name: 'Lowest Common Ancestor of a Binary Tree', frequency: 26, link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
                { name: 'Simplify Path', frequency: 25, link: 'https://leetcode.com/problems/simplify-path/' },
                { name: 'Dot Product of Two Sparse Vectors', frequency: 24, link: 'https://leetcode.com/problems/dot-product-of-two-sparse-vectors/' },
                { name: 'Merge Intervals', frequency: 24, link: 'https://leetcode.com/problems/merge-intervals/' },
                { name: 'Lowest Common Ancestor of a Binary Tree III', frequency: 21, link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/' },
                { name: 'Two Sum', frequency: 19, link: 'https://leetcode.com/problems/two-sum/' },
                { name: 'Valid Word Abbreviation', frequency: 19, link: 'https://leetcode.com/problems/valid-word-abbreviation/' },
                { name: 'Nested List Weight Sum', frequency: 18, link: 'https://leetcode.com/problems/nested-list-weight-sum/' },
                { name: 'Basic Calculator II', frequency: 18, link: 'https://leetcode.com/problems/basic-calculator-ii/' },
                { name: 'Valid Palindrome', frequency: 18, link: 'https://leetcode.com/problems/valid-palindrome/' },
                { name: 'Find Peak Element', frequency: 17, link: 'https://leetcode.com/problems/find-peak-element/' },
                { name: 'Binary Tree Right Side View', frequency: 17, link: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
                { name: 'Pow(x, n)', frequency: 17, link: 'https://leetcode.com/problems/powx-n/' },
                { name: 'Shortest Path in Binary Matrix', frequency: 16, link: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/' },
                { name: 'K Closest Points to Origin', frequency: 15, link: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
                { name: 'Subarray Sum Equals K', frequency: 15, link: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
                { name: 'Minimum Add to Make Parentheses Valid', frequency: 14, link: 'https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/' },
                { name: 'Range Sum of BST', frequency: 14, link: 'https://leetcode.com/problems/range-sum-of-bst/' },
                { name: 'Top K Frequent Elements', frequency: 13, link: 'https://leetcode.com/problems/top-k-frequent-elements/' },
                { name: 'Diameter of Binary Tree', frequency: 12, link: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
                { name: 'Find First and Last Position of Element in Sorted Array', frequency: 12, link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
                { name: 'Merge Sorted Array', frequency: 12, link: 'https://leetcode.com/problems/merge-sorted-array/' },
                { name: 'Valid Parentheses', frequency: 11, link: 'https://leetcode.com/problems/valid-parentheses/' },
                { name: 'Group Shifted Strings', frequency: 11, link: 'https://leetcode.com/problems/group-shifted-strings/' },
                { name: 'Vertical Order Traversal of a Binary Tree', frequency: 11, link: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/' },
                { name: 'Roman to Integer', frequency: 11, link: 'https://leetcode.com/problems/roman-to-integer/' },
                { name: 'Move Zeroes', frequency: 10, link: 'https://leetcode.com/problems/move-zeroes/' },
                { name: 'Continuous Subarray Sum', frequency: 10, link: 'https://leetcode.com/problems/continuous-subarray-sum/' },
                { name: 'Partition Equal Subset Sum', frequency: 10, link: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
                { name: 'Valid Number', frequency: 10, link: 'https://leetcode.com/problems/valid-number/' },
                { name: 'Number of Islands', frequency: 9, link: 'https://leetcode.com/problems/number-of-islands/' },
                { name: 'Copy List with Random Pointer', frequency: 9, link: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
                { name: '3Sum', frequency: 9, link: 'https://leetcode.com/problems/3sum/' },
                { name: 'Next Permutation', frequency: 9, link: 'https://leetcode.com/problems/next-permutation/' },
                { name: 'Moving Average from Data Stream', frequency: 9, link: 'https://leetcode.com/problems/moving-average-from-data-stream/' },
                { name: 'Best Time to Buy and Sell Stock', frequency: 8, link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
                { name: 'Longest Substring Without Repeating Characters', frequency: 8, link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
                { name: 'Custom Sort String', frequency: 8, link: 'https://leetcode.com/problems/custom-sort-string/' },
                { name: 'LRU Cache', frequency: 8, link: 'https://leetcode.com/problems/lru-cache/' },
                { name: 'Subsets', frequency: 8, link: 'https://leetcode.com/problems/subsets/' },
                { name: 'Remove Nth Node From End of List', frequency: 8, link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
                { name: 'Remove Invalid Parentheses', frequency: 8, link: 'https://leetcode.com/problems/remove-invalid-parentheses/' },
                { name: 'Sum Root to Leaf Numbers', frequency: 7, link: 'https://leetcode.com/problems/sum-root-to-leaf-numbers/' },
                { name: 'Insert into a Sorted Circular Linked List', frequency: 7, link: 'https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/' },
                { name: 'Word Break', frequency: 7, link: 'https://leetcode.com/problems/word-break/' },
                { name: 'Maximum Subarray', frequency: 7, link: 'https://leetcode.com/problems/maximum-subarray/' },
                { name: 'Merge k Sorted Lists', frequency: 7, link: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
                { name: 'Binary Search Tree Iterator', frequency: 7, link: 'https://leetcode.com/problems/binary-search-tree-iterator/' },
                { name: 'Add Two Numbers', frequency: 7, link: 'https://leetcode.com/problems/add-two-numbers/' },
                { name: 'Max Consecutive Ones III', frequency: 7, link: 'https://leetcode.com/problems/max-consecutive-ones-iii/' },
                { name: 'Find Pivot Index', frequency: 6, link: 'https://leetcode.com/problems/find-pivot-index/' },
                { name: 'Clone Graph', frequency: 6, link: 'https://leetcode.com/problems/clone-graph/' },
                { name: 'Diagonal Traverse', frequency: 6, link: 'https://leetcode.com/problems/diagonal-traverse/' },
                { name: 'Word Search', frequency: 6, link: 'https://leetcode.com/problems/word-search/' },
                { name: 'Group Anagrams', frequency: 6, link: 'https://leetcode.com/problems/group-anagrams/' },
                { name: 'Merge Two Sorted Lists', frequency: 6, link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
            ]
        },
        {
            name: 'Amazon',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Substring With Largest Variance', frequency: 160 },
                { name: 'Two Sum', frequency: 133 },
                { name: 'Sum of Total Strength of Wizards', frequency: 123 },
                { name: 'Number of Islands', frequency: 116 },
                { name: 'LRU Cache', frequency: 95 },
                { name: 'Analyze User Website Visit Pattern', frequency: 54 },
                { name: 'Trapping Rain Water', frequency: 54 },
                { name: 'Longest Substring Without Repeating Characters', frequency: 52 },
                { name: 'K Closest Points to Origin', frequency: 51 },
                { name: 'Best Time to Buy and Sell Stock', frequency: 51 },
                { name: 'Group Anagrams', frequency: 51 },
                { name: 'Merge k Sorted Lists', frequency: 50 },
                { name: 'Course Schedule', frequency: 46 },
                { name: 'Reorder Data in Log Files', frequency: 45 },
                { name: 'Maximum Subarray', frequency: 44 },
                { name: 'Valid Parentheses', frequency: 44 },
                { name: 'Roman to Integer', frequency: 43 },
                { name: 'Word Ladder', frequency: 42 },
                { name: 'Meeting Rooms II', frequency: 40 },
                { name: 'Sliding Window Maximum', frequency: 39 },
            ]
        },
        {
            name: 'Apple',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Two Sum', frequency: 51 },
                { name: 'Roman to Integer', frequency: 33 },
                { name: 'LRU Cache', frequency: 25 },
                { name: 'Add Two Numbers', frequency: 17 },
                { name: 'Longest Common Prefix', frequency: 17 },
                { name: 'Median of Two Sorted Arrays', frequency: 16 },
                { name: 'Best Time to Buy and Sell Stock', frequency: 16 },
                { name: 'Maximum Subarray', frequency: 14 },
                { name: 'Longest Substring Without Repeating Characters', frequency: 14 },
                { name: '3Sum', frequency: 14 },
                { name: 'Merge Intervals', frequency: 13 },
                { name: 'Valid Sudoku', frequency: 13 },
                { name: 'Number of Islands', frequency: 13 },
                { name: 'Binary Search', frequency: 11 },
                { name: 'Contains Duplicate', frequency: 11 },
                { name: 'Merge Two Sorted Lists', frequency: 11 },
                { name: 'Remove Duplicates from Sorted Array', frequency: 10 },
                { name: 'House Robber', frequency: 9 },
                { name: 'Design Hit Counter', frequency: 9 },
                { name: 'Next Permutation', frequency: 9 },
            ]
        },
        {
            name: 'Netflix',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Reconstruct Itinerary', frequency: 8 },
                { name: 'Valid Parentheses', frequency: 3 },
            ]
        },
        {
            name: 'Microsoft',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Two Sum', frequency: 28 },
                { name: 'Find N Unique Integers Sum up to Zero', frequency: 22 },
                { name: 'Roman to Integer', frequency: 19 },
                { name: 'Maximal Network Rank', frequency: 17 },
                { name: 'Letter Combinations of a Phone Number', frequency: 17 },
                { name: 'Trapping Rain Water', frequency: 17 },
                { name: 'Longest Substring Without Repeating Characters', frequency: 15 },
                { name: 'Longest Happy String', frequency: 14 },
                { name: 'Cinema Seat Allocation', frequency: 13 },
                { name: 'Best Time to Buy and Sell Stock', frequency: 13 },
                { name: 'Median of Two Sorted Arrays', frequency: 13 },
                { name: 'Add Two Numbers', frequency: 11 },
                { name: 'Merge Intervals', frequency: 11 },
                { name: 'Valid Parentheses', frequency: 11 },
                { name: 'Number of Islands', frequency: 11 },
                { name: 'Course Schedule II', frequency: 10 },
                { name: 'Number of Steps to Reduce a Number in Binary Representation to One', frequency: 10 },
                { name: 'Reverse Nodes in k-Group', frequency: 10 },
                { name: 'Multiply Strings', frequency: 9 },
                { name: 'Integer to English Words', frequency: 9 },
                { name: 'Spiral Matrix', frequency: 9 },
                { name: 'LRU Cache', frequency: 9 },
                { name: 'Word Search', frequency: 9 },
                { name: 'Maximum Subarray', frequency: 9 },
                { name: 'Binary Tree Zigzag Level Order Traversal', frequency: 8 },
                { name: 'Sort Colors', frequency: 8 },
                { name: 'Search in Rotated Sorted Array', frequency: 8 },
                { name: '3Sum', frequency: 8 },
                { name: 'Regular Expression Matching', frequency: 8 },
                { name: 'Longest Palindromic Substring', frequency: 8 },
                { name: 'Minimum Time to Make Rope Colorful', frequency: 7 },
                { name: 'Search a 2D Matrix II', frequency: 7 },
                { name: 'Minimum Deletions to Make Character Frequencies Unique', frequency: 7 },
                { name: 'Contains Duplicate', frequency: 7 },
                { name: 'Reverse Words in a String', frequency: 7 },
                { name: 'Decode String', frequency: 7 },
                { name: 'Minimum Moves to Equal Array Elements', frequency: 7 },
                { name: 'Subarray Sum Equals K', frequency: 7 },
                { name: 'Maximum Length of a Concatenated String with Unique Characters', frequency: 6 },
                { name: 'Recover Binary Search Tree', frequency: 6 },
                { name: 'Swap Nodes in Pairs', frequency: 6 },
                { name: 'First Missing Positive', frequency: 6 },
                { name: 'Permutation in String', frequency: 6 },
                { name: 'Number of Steps to Reduce a Number to Zero', frequency: 6 },
                { name: 'Validate Binary Search Tree', frequency: 6 },
                { name: 'Partition Array Into Two Arrays to Minimize Sum Difference', frequency: 6 },
                { name: 'Longest Common Prefix', frequency: 6 },
                { name: 'Coin Change', frequency: 6 },
                { name: 'Serialize and Deserialize Binary Tree', frequency: 6 },
                { name: 'Find Median from Data Stream', frequency: 6 },
                { name: 'Gas Station', frequency: 6 },
                { name: 'Missing Number', frequency: 6 },
                { name: 'Longest Path With Different Adjacent Characters', frequency: 6 },
                { name: 'Palindrome Linked List', frequency: 6 },
                { name: 'Best Time to Buy and Sell Stock II', frequency: 5 },
                { name: 'Binary Tree Maximum Path Sum', frequency: 5 },
                { name: 'Generate Parentheses', frequency: 5 },
                { name: 'Jump Game', frequency: 5 },
                { name: 'String Compression', frequency: 5 },
                { name: 'Find the Duplicate Number', frequency: 5 },
                { name: 'Merge k Sorted Lists', frequency: 5 },
                { name: 'Merge Sorted Array', frequency: 5 },
                { name: 'Meeting Rooms II', frequency: 5 },
                { name: 'Top K Frequent Words', frequency: 5 },
                { name: 'Lowest Common Ancestor of a Binary Tree', frequency: 5 },
                { name: 'Random Pick with Weight', frequency: 5 },
                { name: 'Kth Largest Element in an Array', frequency: 5 },
                { name: 'Insert Delete GetRandom O(1)', frequency: 4 },
                { name: 'String to Integer (atoi)', frequency: 4 },
                { name: 'Flood Fill', frequency: 4 },
                { name: 'Search Insert Position', frequency: 4 },
                { name: 'Construct Binary Tree from Preorder and Inorder Traversal', frequency: 4 },
                { name: 'Top K Frequent Elements', frequency: 4 },
                { name: 'Merge Two Sorted Lists', frequency: 4 },
                { name: 'Binary Tree Right Side View', frequency: 4 },
                { name: 'Permutations', frequency: 4 },
                { name: 'Rotate Image', frequency: 4 },
                { name: 'Word Ladder', frequency: 4 },
                { name: 'Task Scheduler', frequency: 4 },
                { name: 'Group Anagrams', frequency: 4 },
                { name: 'Find Missing Observations', frequency: 4 },
                { name: 'Inorder Successor in BST', frequency: 4 },
                { name: 'Pow(x, n)', frequency: 4 },
                { name: 'Copy List with Random Pointer', frequency: 4 },
                { name: 'Backspace String Compare', frequency: 4 },
                { name: 'Unique Paths', frequency: 4 },
                { name: 'Word Break', frequency: 4 },
                { name: 'Design HashMap', frequency: 4 },
                { name: 'Product of Array Except Self', frequency: 4 },
                { name: 'Path Sum III', frequency: 4 },
                { name: 'Set Matrix Zeroes', frequency: 4 },
                { name: 'Word Break II', frequency: 4 },
                { name: 'Basic Calculator', frequency: 4 },
                { name: 'Maximum Product Subarray', frequency: 4 },
                { name: 'Max Chunks To Make Sorted II', frequency: 4 },
                { name: 'Word Search II', frequency: 4 },
                { name: 'Min Stack', frequency: 4 },
                { name: 'Binary Search Tree Iterator', frequency: 4 },
                { name: 'Number of 1 Bits', frequency: 4 },
                { name: 'Maximum Sum of Two Non-Overlapping Subarrays', frequency: 3 },
                { name: 'Remove Nth Node From End of List', frequency: 3 },
                { name: 'Max Area of Island', frequency: 3 },
            ]
        },
        {
            name: 'Salesforce',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Stickers to Spell Word', frequency: 7 },
                { name: 'IPO', frequency: 5 },
                { name: 'Reconstruct Original Digits from English', frequency: 4 },
                { name: 'Koko Eating Bananas', frequency: 4 },
                { name: 'Merge Intervals', frequency: 4 },
                { name: 'Rotting Oranges', frequency: 3 },
                { name: 'Russian Doll Envelopes', frequency: 2 },
                { name: 'Nested List Weight Sum', frequency: 2 },
                { name: 'Product of Array Except Self', frequency: 2 },
                { name: 'Non-overlapping Intervals', frequency: 2 },
                { name: 'Best Time to Buy and Sell Stock', frequency: 2 },
                { name: 'Validate Binary Search Tree', frequency: 2 },
                { name: 'Decode Ways', frequency: 2 },
                { name: 'Largest Rectangle in Histogram', frequency: 2 },
                { name: 'Longest Palindromic Substring', frequency: 2 },
                { name: 'Jump Game II', frequency: 2 },
                { name: 'Trapping Rain Water', frequency: 2 },
                { name: 'First Missing Positive', frequency: 2 },
                { name: 'Binary Tree Right Side View', frequency: 2 },
            ]
        },
        {
            name: 'Uber',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Bus Routes', frequency: 40 },
                { name: 'Find the Closest Palindrome', frequency: 19 },
                { name: 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit', frequency: 15 },
                { name: 'Leftmost Column with at Least a One', frequency: 15 },
                { name: 'Merge Intervals', frequency: 13 },
                { name: 'Kth Smallest Element in a BST', frequency: 12 },
                { name: 'Number of Islands', frequency: 12 },
                { name: 'Word Search II', frequency: 12 },
                { name: 'Evaluate Division', frequency: 12 },
                { name: 'Word Search', frequency: 11 },
                { name: 'Construct Quad Tree', frequency: 10 },
                { name: 'Longest Repeating Character Replacement', frequency: 10 },
                { name: 'Top K Frequent Words', frequency: 10 },
                { name: 'Two Sum', frequency: 9 },
                { name: 'Insert Delete GetRandom O(1)', frequency: 8 },
                { name: 'Text Justification', frequency: 8 },
                { name: 'Bomb Enemy', frequency: 7 },
                { name: 'Burst Balloons', frequency: 7 },
                { name: 'Minimum Time to Complete Trips', frequency: 7 },
                { name: 'Longest Substring Without Repeating Characters', frequency: 7 },
                { name: 'Median of Two Sorted Arrays', frequency: 7 },
                { name: 'Longest Palindromic Substring', frequency: 6 },
                { name: 'Find First and Last Position of Element in Sorted Array', frequency: 6 },
                { name: 'My Calendar I', frequency: 6 },
                { name: 'Add Two Numbers', frequency: 6 },
                { name: 'Exam Room', frequency: 6 },
                { name: 'Shuffle an Array', frequency: 5 },
                { name: 'Serialize and Deserialize Binary Tree', frequency: 5 },
                { name: 'Next Palindrome Using Same Digits', frequency: 5 },
                { name: 'Decode String', frequency: 5 },
                { name: 'Longest Common Prefix', frequency: 5 },
                { name: 'Optimal Account Balancing', frequency: 5 },
                { name: '3Sum', frequency: 5 },
                { name: 'Letter Combinations of a Phone Number', frequency: 5 },
                { name: 'Meeting Rooms II', frequency: 5 },
                { name: 'Find Peak Element', frequency: 5 },
                { name: 'Frequency of the Most Frequent Element', frequency: 5 },
                { name: 'Valid Parentheses', frequency: 4 },
                { name: 'Top K Frequent Elements', frequency: 4 },
                { name: 'Merge Two Sorted Lists', frequency: 4 },
                { name: 'Binary Subarrays With Sum', frequency: 4 },
                { name: 'Binary Search', frequency: 4 },
                { name: 'Generate Parentheses', frequency: 4 },
                { name: 'Merge k Sorted Lists', frequency: 4 },
                { name: 'Valid Sudoku', frequency: 4 },
                { name: 'Trapping Rain Water', frequency: 4 },
                { name: 'Rotate Image', frequency: 4 },
                { name: 'Course Schedule', frequency: 4 },
                { name: 'Group Anagrams', frequency: 4 },
                { name: 'Rotting Oranges', frequency: 4 },
                { name: 'Two Sum II - Input Array Is Sorted', frequency: 4 },
                { name: 'Reorganize String', frequency: 4 },
                { name: 'Candy', frequency: 4 },
                { name: 'Best Position for a Service Centre', frequency: 4 },
                { name: 'Best Time to Buy and Sell Stock', frequency: 4 },
                { name: 'Next Permutation', frequency: 3 },
                { name: 'Shortest Path in a Grid with Obstacles Elimination', frequency: 3 },
                { name: 'Minimum Path Sum', frequency: 3 },
                { name: 'LRU Cache', frequency: 3 },
                { name: 'Maximum Subarray', frequency: 3 },
                { name: 'Isomorphic Strings', frequency: 3 },
                { name: 'Interval List Intersections', frequency: 3 },
            ]
        },
        {
            name: 'Nvidia',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Minimum Knight Moves', frequency: 2 },
                { name: 'Merge Sorted Array', frequency: 2 },
                { name: 'Valid Sudoku ', frequency: 2 },
            ]
        },
        {
            name: 'Intuit',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Find First and Last Position of Element in Sorted Array', frequency: 4 },
                { name: 'Subdomain Visit Count', frequency: 3 },
                { name: 'Palindrome Linked List', frequency: 3 },
                { name: 'Course Schedule', frequency: 3 },
                { name: 'Number of Islands', frequency: 3 },
                { name: 'Maximum Length of Repeated Subarray', frequency: 2 },
                { name: 'Find Median from Data Stream', frequency: 2 },
                { name: 'Design Circular Queue', frequency: 2 },
                { name: 'Rotting Oranges', frequency: 2 },
                { name: 'Course Schedule II', frequency: 2 },
                { name: 'Sum of Nodes with Even-Valued Grandparent', frequency: 2 },
                { name: 'Reorganize String', frequency: 2 },
                { name: 'LRU Cache', frequency: 2 },
                { name: 'Interleaving String', frequency: 2 },
                { name: 'Sudoku Solver', frequency: 2 },
                { name: 'Kth Largest Element in an Array', frequency: 2 },
            ]
        },
        {
            name: 'Citadel',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Subarray Sums Divisible by K', frequency: 36 },
                { name: 'Range Addition', frequency: 10 },
                { name: 'Smallest Range II', frequency: 8 },
                { name: 'Minimum Costs Using the Train Line', frequency: 6 },
                { name: 'Integer to Roman', frequency: 3 },
                { name: 'Sliding Window Maximum', frequency: 3 },
                { name: 'Subarray Sum Equals K', frequency: 2 },
                { name: 'The Maze', frequency: 2 },
                { name: 'Design In-Memory File System', frequency: 2 },
                { name: 'Asteroid Collision', frequency: 2 },
                { name: 'Transpose Matrix', frequency: 2 },
                { name: 'Minimum Size Subarray Sum', frequency: 2 },
                { name: 'Best Time to Buy and Sell Stock III', frequency: 2 },
                { name: 'Best Time to Buy and Sell Stock', frequency: 2 },
                { name: 'Permutations', frequency: 2 },
                { name: 'Insert Delete GetRandom O(1)', frequency: 2 },
            ]
        },
        {
            name: 'Hudson River Trading',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Verbal Arithmetic Puzzle', frequency: 12 },
                { name: 'Remove Comments', frequency: 5 },
                { name: 'Split Array Largest Sum', frequency: 4 },
                { name: 'Add Binary', frequency: 3 },
                { name: 'First Missing Positive', frequency: 2 },
            ]
        },
        {
            name: 'Adobe',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { name: 'Two Sum', frequency: 63 },
                { name: 'Roman to Integer', frequency: 38 },
                { name: 'Valid Parentheses', frequency: 17 },
                { name: 'Add Two Numbers', frequency: 16 },
                { name: 'Best Time to Buy and Sell Stock', frequency: 15 },
                { name: 'Longest Substring Without Repeating Characters', frequency: 14 },
                { name: 'Rotate Image', frequency: 11 },
                { name: 'Climbing Stairs', frequency: 11 },
                { name: 'Merge Intervals', frequency: 11 },
                { name: 'Maximum Subarray', frequency: 10 },
                { name: '3Sum', frequency: 10 },
                { name: 'Median of Two Sorted Arrays', frequency: 10 },
                { name: "Pascal's Triangle", frequency: 9 },
                { name: 'Running Sum of 1d Array', frequency: 9 },
                { name: 'Largest Rectangle in Histogram', frequency: 8 },
                { name: 'Longest Palindromic Substring', frequency: 8 },
                { name: 'Reverse Integer', frequency: 8 },
                { name: 'Number of Islands', frequency: 8 },
                { name: 'Contains Duplicate', frequency: 8 },
                { name: 'N-Queens', frequency: 7 },
            ]
        },
        {
            "name": "Oracle",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { name: 'Two Sum', frequency: 7 },
                { name: 'Remove Duplicate Letters', frequency: 5 },
                { name: 'Roman to Integer', frequency: 4 },
                { name: 'Best Time to Buy and Sell Stock', frequency: 3 },
                { name: 'Valid Parentheses', frequency: 3 },
                { name: 'Generate Parentheses', frequency: 3 },
                { name: 'Group Anagrams', frequency: 3 },
                { name: 'Minimum Moves to Equal Array Elements', frequency: 3 },
                { name: 'Minimum Window Substring', frequency: 3 },
                { name: 'Integer to Roman', frequency: 3 },
                { name: 'Merge Sorted Array', frequency: 3 },
                { name: 'LRU Cache', frequency: 3 },
                { name: 'Number of Islands', frequency: 3 },
                { name: 'Lowest Common Ancestor of a Binary Tree', frequency: 3 },
                { name: 'Reverse Linked List', frequency: 3 },
                { name: 'Maximum Subarray', frequency: 2 },
                { name: 'Meeting Rooms II', frequency: 2 },
                { name: 'Evaluate Reverse Polish Notation', frequency: 2 },
                { name: 'Missing Number', frequency: 2 },
                { name: 'Design Browser History', frequency: 2 },
            ]
        },
        {
            "name": "Test",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                {name: "Two Sum", frequency: 46, link: "https://leetcode.com/problems/two-sum/description/"}
            ]
        },
        
    ];

    // Function to redirect to the specified link in a new tab
    function redirectToLink(link) {
        window.open(link, '_blank');
    }

    // Iterate through companies and problems
    leetCodeCompanies.forEach(company => {
        const companyDiv = document.createElement('div');
        companyDiv.classList.add('company-section');
        companyDiv.style.backgroundImage = `url(${company.image})`;
        companyDiv.style.backgroundSize = 'cover';
        companyDiv.style.backgroundPosition = 'center';

        const companyHeader = document.createElement('h2');
        companyHeader.classList.add('company-name');

        const companyNameParts = company.name.split(' ');

        companyNameParts.forEach((part, index) => {
            const partSpan = document.createElement('span');
            partSpan.textContent = part;

            // Set text color to white for "Salesforce"
            if (company.name === 'Salesforce') {
                partSpan.style.color = 'white';
            }

            companyHeader.appendChild(partSpan);

            // Add space between name parts, except for the last part
            if (index < companyNameParts.length - 1) {
                companyHeader.appendChild(document.createTextNode(' '));
            }
        });

        companyDiv.appendChild(companyHeader);

        const problemsList = document.createElement('div');
        problemsList.classList.add('problems-list');

        company.problems.forEach(problem => {
            const problemDiv = document.createElement('div');
            problemDiv.classList.add('problem-item');
            problemDiv.innerHTML = `<p>${problem.name}</p><p>Frequency: ${problem.frequency} times</p>`;

            // Add click event listener to redirect to the specified link in a new tab
            problemDiv.addEventListener('click', function () {
                redirectToLink(problem.link);
            });

            // Append the problem div to the problemsList
            problemsList.appendChild(problemDiv);
        });

        companyDiv.appendChild(problemsList);
        companyInfo.appendChild(companyDiv);
    });
});
