document.addEventListener('DOMContentLoaded', function () {
    const companyInfo = document.getElementById('company-info');

    const leetCodeCompanies = [
        {
            name: 'Google',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { "name": "Race Car", "frequency": 72, "link": "https://leetcode.com/problems/race-car/" },
                { "name": "Two Sum", "frequency": 46, "link": "https://leetcode.com/problems/two-sum/" },
                { "name": "My Calendar I", "frequency": 44, "link": "https://leetcode.com/problems/my-calendar-i/" },
                { "name": "Logger Rate Limiter", "frequency": 35, "link": "https://leetcode.com/problems/logger-rate-limiter/" },
                { "name": "Shortest Path in a Grid with Obstacles Elimination", "frequency": 34, "link": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/" },
                { "name": "Step-By-Step Directions From a Binary Tree Node to Another", "frequency": 34, "link": "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/" },
                { "name": "Stock Price Fluctuation", "frequency": 34, "link": "https://leetcode.com/problems/stock-price-fluctuation/" },
                { "name": "Find Leaves of Binary Tree", "frequency": 33, "link": "https://leetcode.com/problems/find-leaves-of-binary-tree/" },
                { "name": "Roman to Integer", "frequency": 30, "link": "https://leetcode.com/problems/roman-to-integer/" },
                { "name": "Number of Islands", "frequency": 24, "link": "https://leetcode.com/problems/number-of-islands/" },
                { "name": "Longest String Chain", "frequency": 23, "link": "https://leetcode.com/problems/longest-string-chain/" },
                { "name": "The Earliest Moment When Everyone Become Friends", "frequency": 21, "link": "https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/" },
                { "name": "Amount of New Area Painted Each Day", "frequency": 20, "link": "https://leetcode.com/problems/amount-of-new-area-painted-each-day/" },
                { "name": "Random Pick with Weight", "frequency": 20, "link": "https://leetcode.com/problems/random-pick-with-weight/" },
                { "name": "Find All Possible Recipes from Given Supplies", "frequency": 19, "link": "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/" },
                { "name": "Decode String", "frequency": 19, "link": "https://leetcode.com/problems/decode-string/" },
                { "name": "Meeting Rooms II", "frequency": 19, "link": "https://leetcode.com/problems/meeting-rooms-ii/" },
                { "name": "Text Justification", "frequency": 18, "link": "https://leetcode.com/problems/text-justification/" },
                { "name": "Range Module", "frequency": 18, "link": "https://leetcode.com/problems/range-module/" },
                { "name": "Longest Increasing Path in a Matrix", "frequency": 16, "link": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" },
                { "name": "Merge Intervals", "frequency": 16, "link": "https://leetcode.com/problems/merge-intervals/" },
                { "name": "Detect Squares", "frequency": 15, "link": "https://leetcode.com/problems/detect-squares/" },
                { "name": "Valid Parentheses", "frequency": 15, "link": "https://leetcode.com/problems/valid-parentheses/" },
                { "name": "Longest Consecutive Sequence", "frequency": 14, "link": "https://leetcode.com/problems/longest-consecutive-sequence/" },
                { "name": "Detonate the Maximum Bombs", "frequency": 13, "link": "https://leetcode.com/problems/detonate-the-maximum-bombs/" },
                { "name": "Unique Paths", "frequency": 13, "link": "https://leetcode.com/problems/unique-paths/" },
                { "name": "Course Schedule II", "frequency": 13, "link": "https://leetcode.com/problems/course-schedule-ii/" },
                { "name": "Maximum Number of Visible Points", "frequency": 13, "link": "https://leetcode.com/problems/maximum-number-of-visible-points/" },
                { "name": "Median of Two Sorted Arrays", "frequency": 13, "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
                { "name": "Insert Interval", "frequency": 12, "link": "https://leetcode.com/problems/insert-interval/" },
                { "name": "Longest Common Prefix", "frequency": 12, "link": "https://leetcode.com/problems/longest-common-prefix/" },
                { "name": "Guess the Word", "frequency": 12, "link": "https://leetcode.com/problems/guess-the-word/" },
                { "name": "Trapping Rain Water", "frequency": 12, "link": "https://leetcode.com/problems/trapping-rain-water/" },
                { "name": "First Bad Version", "frequency": 12, "link": "https://leetcode.com/problems/first-bad-version/" },
                { "name": "LRU Cache", "frequency": 12, "link": "https://leetcode.com/problems/lru-cache/" },
                { "name": "Shortest Way to Form String", "frequency": 12, "link": "https://leetcode.com/problems/shortest-way-to-form-string/" },
                { "name": "Filling Bookcase Shelves", "frequency": 11, "link": "https://leetcode.com/problems/filling-bookcase-shelves/" },
                { "name": "Evaluate Reverse Polish Notation", "frequency": 11, "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
                { "name": "Snapshot Array", "frequency": 11, "link": "https://leetcode.com/problems/snapshot-array/" },
                { "name": "Sliding Window Maximum", "frequency": 11, "link": "https://leetcode.com/problems/sliding-window-maximum/" }
            ]
        },
        
        {
            name: 'Meta',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { "name": "Minimum Remove to Make Valid Parentheses", "frequency": 45, "link": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/" },
                { "name": "Valid Palindrome II", "frequency": 38, "link": "https://leetcode.com/problems/valid-palindrome-ii/" },
                { "name": "Buildings With an Ocean View", "frequency": 34, "link": "https://leetcode.com/problems/buildings-with-an-ocean-view/" },
                { "name": "Binary Tree Vertical Order Traversal", "frequency": 33, "link": "https://leetcode.com/problems/binary-tree-vertical-order-traversal/" },
                { "name": "Kth Largest Element in an Array", "frequency": 31, "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
                { "name": "Random Pick with Weight", "frequency": 28, "link": "https://leetcode.com/problems/random-pick-with-weight/" },
                { "name": "Lowest Common Ancestor of a Binary Tree", "frequency": 26, "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
                { "name": "Simplify Path", "frequency": 25, "link": "https://leetcode.com/problems/simplify-path/" },
                { "name": "Dot Product of Two Sparse Vectors", "frequency": 24, "link": "https://leetcode.com/problems/dot-product-of-two-sparse-vectors/" },
                { "name": "Merge Intervals", "frequency": 24, "link": "https://leetcode.com/problems/merge-intervals/" },
                { "name": "Lowest Common Ancestor of a Binary Tree III", "frequency": 21, "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/" },
                { "name": "Two Sum", "frequency": 19, "link": "https://leetcode.com/problems/two-sum/" },
                { "name": "Valid Word Abbreviation", "frequency": 19, "link": "https://leetcode.com/problems/valid-word-abbreviation/" },
                { "name": "Nested List Weight Sum", "frequency": 18, "link": "https://leetcode.com/problems/nested-list-weight-sum/" },
                { "name": "Basic Calculator II", "frequency": 18, "link": "https://leetcode.com/problems/basic-calculator-ii/" },
                { "name": "Valid Palindrome", "frequency": 18, "link": "https://leetcode.com/problems/valid-palindrome/" },
                { "name": "Find Peak Element", "frequency": 17, "link": "https://leetcode.com/problems/find-peak-element/" },
                { "name": "Binary Tree Right Side View", "frequency": 17, "link": "https://leetcode.com/problems/binary-tree-right-side-view/" },
                { "name": "Pow(x, n)", "frequency": 17, "link": "https://leetcode.com/problems/powx-n/" },
                { "name": "Shortest Path in Binary Matrix", "frequency": 16, "link": "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
                { "name": "K Closest Points to Origin", "frequency": 15, "link": "https://leetcode.com/problems/k-closest-points-to-origin/" },
                { "name": "Subarray Sum Equals K", "frequency": 15, "link": "https://leetcode.com/problems/subarray-sum-equals-k/" },
                { "name": "Minimum Add to Make Parentheses Valid", "frequency": 14, "link": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/" },
                { "name": "Range Sum of BST", "frequency": 14, "link": "https://leetcode.com/problems/range-sum-of-bst/" },
                { "name": "Top K Frequent Elements", "frequency": 13, "link": "https://leetcode.com/problems/top-k-frequent-elements/" },
                { "name": "Diameter of Binary Tree", "frequency": 12, "link": "https://leetcode.com/problems/diameter-of-binary-tree/" },
                { "name": "Find First and Last Position of Element in Sorted Array", "frequency": 12, "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
                { "name": "Merge Sorted Array", "frequency": 12, "link": "https://leetcode.com/problems/merge-sorted-array/" },
                { "name": "Valid Parentheses", "frequency": 11, "link": "https://leetcode.com/problems/valid-parentheses/" },
                { "name": "Group Shifted Strings", "frequency": 11, "link": "https://leetcode.com/problems/group-shifted-strings/" },
                { "name": "Vertical Order Traversal of a Binary Tree", "frequency": 11, "link": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
                { "name": "Roman to Integer", "frequency": 11, "link": "https://leetcode.com/problems/roman-to-integer/" },
                { "name": "Move Zeroes", "frequency": 10, "link": "https://leetcode.com/problems/move-zeroes/" },
                { "name": "Continuous Subarray Sum", "frequency": 10, "link": "https://leetcode.com/problems/continuous-subarray-sum/" },
                { "name": "Partition Equal Subset Sum", "frequency": 10, "link": "https://leetcode.com/problems/partition-equal-subset-sum/" },
                { "name": "Valid Number", "frequency": 10, "link": "https://leetcode.com/problems/valid-number/" },
                { "name": "Number of Islands", "frequency": 9, "link": "https://leetcode.com/problems/number-of-islands/" },
                { "name": "Copy List with Random Pointer", "frequency": 9, "link": "https://leetcode.com/problems/copy-list-with-random-pointer/" },
                { "name": "3Sum", "frequency": 9, "link": "https://leetcode.com/problems/3sum/" },
                { "name": "Next Permutation", "frequency": 9, "link": "https://leetcode.com/problems/next-permutation/" },
                { "name": "Moving Average from Data Stream", "frequency": 9, "link": "https://leetcode.com/problems/moving-average-from-data-stream/" },
                { "name": "Best Time to Buy and Sell Stock", "frequency": 8, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { "name": "Longest Substring Without Repeating Characters", "frequency": 8, "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                { "name": "Custom Sort String", "frequency": 8, "link": "https://leetcode.com/problems/custom-sort-string/" },
                { "name": "LRU Cache", "frequency": 8, "link": "https://leetcode.com/problems/lru-cache/" },
                { "name": "Subsets", "frequency": 8, "link": "https://leetcode.com/problems/subsets/" },
                { "name": "Remove Nth Node From End of List", "frequency": 8, "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
                { "name": "Remove Invalid Parentheses", "frequency": 8, "link": "https://leetcode.com/problems/remove-invalid-parentheses/" },
                { "name": "Sum Root to Leaf Numbers", "frequency": 7, "link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/" },
                { "name": "Insert into a Sorted Circular Linked List", "frequency": 7, "link": "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/" },
                { "name": "Word Break", "frequency": 7, "link": "https://leetcode.com/problems/word-break/" },
                { "name": "Maximum Subarray", "frequency": 7, "link": "https://leetcode.com/problems/maximum-subarray/" },
                { "name": "Merge k Sorted Lists", "frequency": 7, "link": "https://leetcode.com/problems/merge-k-sorted-lists/" },
                { "name": "Binary Search Tree Iterator", "frequency": 7, "link": "https://leetcode.com/problems/binary-search-tree-iterator/" },
                { "name": "Add Two Numbers", "frequency": 7, "link": "https://leetcode.com/problems/add-two-numbers/" },
                { "name": "Max Consecutive Ones III", "frequency": 7, "link": "https://leetcode.com/problems/max-consecutive-ones-iii/" },
                { "name": "Find Pivot Index", "frequency": 6, "link": "https://leetcode.com/problems/find-pivot-index/" },
                { "name": "Clone Graph", "frequency": 6, "link": "https://leetcode.com/problems/clone-graph/" },
                { "name": "Diagonal Traverse", "frequency": 6, "link": "https://leetcode.com/problems/diagonal-traverse/" },
                { "name": "Word Search", "frequency": 6, "link": "https://leetcode.com/problems/word-search/" },
                { "name": "Group Anagrams", "frequency": 6, "link": "https://leetcode.com/problems/group-anagrams/" },
                { "name": "Merge Two Sorted Lists", "frequency": 6, "link": "https://leetcode.com/problems/merge-two-sorted-lists/" }
            ]
        },

        {
            name: 'Amazon',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { "name": "Substring With Largest Variance", "frequency": 160, "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/" },
                { "name": "Two Sum", "frequency": 133, "link": "https://leetcode.com/problems/two-sum/" },
                { "name": "Sum of Total Strength of Wizards", "frequency": 123, "link": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/" },
                { "name": "Number of Islands", "frequency": 116, "link": "https://leetcode.com/problems/number-of-islands/" },
                { "name": "LRU Cache", "frequency": 95, "link": "https://leetcode.com/problems/lru-cache/" },
                { "name": "Analyze User Website Visit Pattern", "frequency": 54, "link": "https://leetcode.com/problems/analyze-user-website-visit-pattern/" },
                { "name": "Trapping Rain Water", "frequency": 54, "link": "https://leetcode.com/problems/trapping-rain-water/" },
                { "name": "Longest Substring Without Repeating Characters", "frequency": 52, "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                { "name": "K Closest Points to Origin", "frequency": 51, "link": "https://leetcode.com/problems/k-closest-points-to-origin/" },
                { "name": "Best Time to Buy and Sell Stock", "frequency": 51, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { "name": "Group Anagrams", "frequency": 51, "link": "https://leetcode.com/problems/group-anagrams/" },
                { "name": "Merge k Sorted Lists", "frequency": 50, "link": "https://leetcode.com/problems/merge-k-sorted-lists/" },
                { "name": "Course Schedule", "frequency": 46, "link": "https://leetcode.com/problems/course-schedule/" },
                { "name": "Reorder Data in Log Files", "frequency": 45, "link": "https://leetcode.com/problems/reorder-data-in-log-files/" },
                { "name": "Maximum Subarray", "frequency": 44, "link": "https://leetcode.com/problems/maximum-subarray/" },
                { "name": "Valid Parentheses", "frequency": 44, "link": "https://leetcode.com/problems/valid-parentheses/" },
                { "name": "Roman to Integer", "frequency": 43, "link": "https://leetcode.com/problems/roman-to-integer/" },
                { "name": "Word Ladder", "frequency": 42, "link": "https://leetcode.com/problems/word-ladder/" },
                { "name": "Meeting Rooms II", "frequency": 40, "link": "https://leetcode.com/problems/meeting-rooms-ii/" },
                { "name": "Sliding Window Maximum", "frequency": 39, "link": "https://leetcode.com/problems/sliding-window-maximum/" }
            ]
        },

        {
            name: 'Apple',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { "name": "Two Sum", "frequency": 51, "link": "https://leetcode.com/problems/two-sum/" },
                { "name": "Roman to Integer", "frequency": 33, "link": "https://leetcode.com/problems/roman-to-integer/" },
                { "name": "LRU Cache", "frequency": 25, "link": "https://leetcode.com/problems/lru-cache/" },
                { "name": "Add Two Numbers", "frequency": 17, "link": "https://leetcode.com/problems/add-two-numbers/" },
                { "name": "Longest Common Prefix", "frequency": 17, "link": "https://leetcode.com/problems/longest-common-prefix/" },
                { "name": "Median of Two Sorted Arrays", "frequency": 16, "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
                { "name": "Best Time to Buy and Sell Stock", "frequency": 16, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { "name": "Maximum Subarray", "frequency": 14, "link": "https://leetcode.com/problems/maximum-subarray/" },
                { "name": "Longest Substring Without Repeating Characters", "frequency": 14, "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                { "name": "3Sum", "frequency": 14, "link": "https://leetcode.com/problems/3sum/" },
                { "name": "Merge Intervals", "frequency": 13, "link": "https://leetcode.com/problems/merge-intervals/" },
                { "name": "Valid Sudoku", "frequency": 13, "link": "https://leetcode.com/problems/valid-sudoku/" },
                { "name": "Number of Islands", "frequency": 13, "link": "https://leetcode.com/problems/number-of-islands/" },
                { "name": "Binary Search", "frequency": 11, "link": "https://leetcode.com/problems/binary-search/" },
                { "name": "Contains Duplicate", "frequency": 11, "link": "https://leetcode.com/problems/contains-duplicate/" },
                { "name": "Merge Two Sorted Lists", "frequency": 11, "link": "https://leetcode.com/problems/merge-two-sorted-lists/" },
                { "name": "Remove Duplicates from Sorted Array", "frequency": 10, "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
                { "name": "House Robber", "frequency": 9, "link": "https://leetcode.com/problems/house-robber/" },
                { "name": "Design Hit Counter", "frequency": 9, "link": "https://leetcode.com/problems/design-hit-counter/" },
                { "name": "Next Permutation", "frequency": 9, "link": "https://leetcode.com/problems/next-permutation/" }
            ]
        },

        {
            name: 'Netflix',
            image: 'https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
            problems: [
                { "name": "Reconstruct Itinerary", "frequency": 8, "link": "https://leetcode.com/problems/reconstruct-itinerary/" },
                { "name": "Valid Parentheses", "frequency": 3, "link": "https://leetcode.com/problems/valid-parentheses/" }
            ]
        },

        {
            "name": "Microsoft",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { "name": "Two Sum", "frequency": 28, "link": "https://leetcode.com/problems/two-sum/" },
                { "name": "Find N Unique Integers Sum up to Zero", "frequency": 22, "link": "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/" },
                { "name": "Roman to Integer", "frequency": 19, "link": "https://leetcode.com/problems/roman-to-integer/" },
                { "name": "Maximal Network Rank", "frequency": 17, "link": "https://leetcode.com/problems/maximal-network-rank/" },
                { "name": "Letter Combinations of a Phone Number", "frequency": 17, "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
                { "name": "Trapping Rain Water", "frequency": 17, "link": "https://leetcode.com/problems/trapping-rain-water/" },
                { "name": "Longest Substring Without Repeating Characters", "frequency": 15, "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                { "name": "Longest Happy String", "frequency": 14, "link": "https://leetcode.com/problems/longest-happy-string/" },
                { "name": "Cinema Seat Allocation", "frequency": 13, "link": "https://leetcode.com/problems/cinema-seat-allocation/" },
                { "name": "Best Time to Buy and Sell Stock", "frequency": 13, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { "name": "Median of Two Sorted Arrays", "frequency": 13, "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
                { "name": "Add Two Numbers", "frequency": 11, "link": "https://leetcode.com/problems/add-two-numbers/" },
                { "name": "Merge Intervals", "frequency": 11, "link": "https://leetcode.com/problems/merge-intervals/" },
                { "name": "Valid Parentheses", "frequency": 11, "link": "https://leetcode.com/problems/valid-parentheses/" },
                { "name": "Number of Islands", "frequency": 11, "link": "https://leetcode.com/problems/number-of-islands/" },
                { "name": "Course Schedule II", "frequency": 10, "link": "https://leetcode.com/problems/course-schedule-ii/" },
                { "name": "Number of Steps to Reduce a Number in Binary Representation to One", "frequency": 10, "link": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/" },
                { "name": "Reverse Nodes in k-Group", "frequency": 10, "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
                { "name": "Multiply Strings", "frequency": 9, "link": "https://leetcode.com/problems/multiply-strings/" },
                { "name": "Integer to English Words", "frequency": 9, "link": "https://leetcode.com/problems/integer-to-english-words/" },
                { "name": "Spiral Matrix", "frequency": 9, "link": "https://leetcode.com/problems/spiral-matrix/" },
                { "name": "LRU Cache", "frequency": 9, "link": "https://leetcode.com/problems/lru-cache/" },
                { "name": "Word Search", "frequency": 9, "link": "https://leetcode.com/problems/word-search/" },
                { "name": "Maximum Subarray", "frequency": 9, "link": "https://leetcode.com/problems/maximum-subarray/" },
                { "name": "Binary Tree Zigzag Level Order Traversal", "frequency": 8, "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
                { "name": "Sort Colors", "frequency": 8, "link": "https://leetcode.com/problems/sort-colors/" },
                { "name": "Search in Rotated Sorted Array", "frequency": 8, "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
                { "name": "3Sum", "frequency": 8, "link": "https://leetcode.com/problems/3sum/" },
                { "name": "Regular Expression Matching", "frequency": 8, "link": "https://leetcode.com/problems/regular-expression-matching/" },
                { "name": "Longest Palindromic Substring", "frequency": 8, "link": "https://leetcode.com/problems/longest-palindromic-substring/" },
                { "name": "Minimum Time to Make Rope Colorful", "frequency": 7, "link": "https://leetcode.com/problems/minimum-time-to-make-rope-colorful/" },
                { "name": "Search a 2D Matrix II", "frequency": 7, "link": "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
                { "name": "Minimum Deletions to Make Character Frequencies Unique", "frequency": 7, "link": "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/" },
                { "name": "Contains Duplicate", "frequency": 7, "link": "https://leetcode.com/problems/contains-duplicate/" },
                { "name": "Reverse Words in a String", "frequency": 7, "link": "https://leetcode.com/problems/reverse-words-in-a-string/" },
                { "name": "Decode String", "frequency": 7, "link": "https://leetcode.com/problems/decode-string/" },
                { "name": "Minimum Moves to Equal Array Elements", "frequency": 7, "link": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements/" },
                { "name": "Subarray Sum Equals K", "frequency": 7, "link": "https://leetcode.com/problems/subarray-sum-equals-k/" },
                { "name": "Maximum Length of a Concatenated String with Unique Characters", "frequency": 6, "link": "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/" },
                { "name": "Recover Binary Search Tree", "frequency": 6, "link": "https://leetcode.com/problems/recover-binary-search-tree/" },
                { "name": "Swap Nodes in Pairs", "frequency": 6, "link": "https://leetcode.com/problems/swap-nodes-in-pairs/" },
                { "name": "First Missing Positive", "frequency": 6, "link": "https://leetcode.com/problems/first-missing-positive/" },
                { "name": "Permutation in String", "frequency": 6, "link": "https://leetcode.com/problems/permutation-in-string/" },
                { "name": "Number of Steps to Reduce a Number to Zero", "frequency": 6, "link": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/" },
                { "name": "Validate Binary Search Tree", "frequency": 6, "link": "https://leetcode.com/problems/validate-binary-search-tree/" },
                { "name": "Partition Array Into Two Arrays to Minimize Sum Difference", "frequency": 6, "link": "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/" },
                { "name": "Longest Common Prefix", "frequency": 6, "link": "https://leetcode.com/problems/longest-common-prefix/" },
                { "name": "Coin Change", "frequency": 6, "link": "https://leetcode.com/problems/coin-change/" },
                { "name": "Serialize and Deserialize Binary Tree", "frequency": 6, "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
                { "name": "Find Median from Data Stream", "frequency": 6, "link": "https://leetcode.com/problems/find-median-from-data-stream/" },
                { "name": "Gas Station", "frequency": 6, "link": "https://leetcode.com/problems/gas-station/" },
                { "name": "Missing Number", "frequency": 6, "link": "https://leetcode.com/problems/missing-number/" },
                { "name": "Longest Path With Different Adjacent Characters", "frequency": 6, "link": "https://leetcode.com/problems/longest-path-with-different-adjacent-characters/" },
                { "name": "Palindrome Linked List", "frequency": 6, "link": "https://leetcode.com/problems/palindrome-linked-list/" },
                { "name": "Best Time to Buy and Sell Stock II", "frequency": 5, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
                { "name": "Binary Tree Maximum Path Sum", "frequency": 5, "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
                { "name": "Generate Parentheses", "frequency": 5, "link": "https://leetcode.com/problems/generate-parentheses/" },
                { "name": "Jump Game", "frequency": 5, "link": "https://leetcode.com/problems/jump-game/" },
                { "name": "String Compression", "frequency": 5, "link": "https://leetcode.com/problems/string-compression/" },
                { "name": "Find the Duplicate Number", "frequency": 5, "link": "https://leetcode.com/problems/find-the-duplicate-number/" },
                { "name": "Merge k Sorted Lists", "frequency": 5, "link": "https://leetcode.com/problems/merge-k-sorted-lists/" },
                { "name": "Merge Sorted Array", "frequency": 5, "link": "https://leetcode.com/problems/merge-sorted-array/" },
                { "name": "Meeting Rooms II", "frequency": 5, "link": "https://leetcode.com/problems/meeting-rooms-ii/" },
                { "name": "Top K Frequent Words", "frequency": 5, "link": "https://leetcode.com/problems/top-k-frequent-words/" },
                { "name": "Lowest Common Ancestor of a Binary Tree", "frequency": 5, "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
                { "name": "Random Pick with Weight", "frequency": 5, "link": "https://leetcode.com/problems/random-pick-with-weight/" },
                { "name": "Kth Largest Element in an Array", "frequency": 5, "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
                { "name": "Insert Delete GetRandom O(1)", "frequency": 4, "link": "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
                { "name": "String to Integer (atoi)", "frequency": 4, "link": "https://leetcode.com/problems/string-to-integer-atoi/" },
                { "name": "Flood Fill", "frequency": 4, "link": "https://leetcode.com/problems/flood-fill/" },
                { "name": "Search Insert Position", "frequency": 4, "link": "https://leetcode.com/problems/search-insert-position/" },
                { "name": "Construct Binary Tree from Preorder and Inorder Traversal", "frequency": 4, "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
                { "name": "Top K Frequent Elements", "frequency": 4, "link": "https://leetcode.com/problems/top-k-frequent-elements/" },
                { "name": "Merge Two Sorted Lists", "frequency": 4, "link": "https://leetcode.com/problems/merge-two-sorted-lists/" },
                { "name": "Binary Tree Right Side View", "frequency": 4, "link": "https://leetcode.com/problems/binary-tree-right-side-view/" },
                { "name": "Permutations", "frequency": 4, "link": "https://leetcode.com/problems/permutations/" },
                { "name": "Rotate Image", "frequency": 4, "link": "https://leetcode.com/problems/rotate-image/" },
                { "name": "Word Ladder", "frequency": 4, "link": "https://leetcode.com/problems/word-ladder/" },
                { "name": "Task Scheduler", "frequency": 4, "link": "https://leetcode.com/problems/task-scheduler/" },
                { "name": "Group Anagrams", "frequency": 4, "link": "https://leetcode.com/problems/group-anagrams/" },
                { "name": "Find Missing Observations", "frequency": 4, "link": "https://leetcode.com/problems/find-missing-observations/" },
                { "name": "Inorder Successor in BST", "frequency": 4, "link": "https://leetcode.com/problems/inorder-successor-in-bst/" },
                { "name": "Pow(x, n)", "frequency": 4, "link": "https://leetcode.com/problems/powx-n/" },
                { "name": "Copy List with Random Pointer", "frequency": 4, "link": "https://leetcode.com/problems/copy-list-with-random-pointer/" },
                { "name": "Backspace String Compare", "frequency": 4, "link": "https://leetcode.com/problems/backspace-string-compare/" },
                { "name": "Unique Paths", "frequency": 4, "link": "https://leetcode.com/problems/unique-paths/" },
                { "name": "Word Break", "frequency": 4, "link": "https://leetcode.com/problems/word-break/" },
                { "name": "Design HashMap", "frequency": 4, "link": "https://leetcode.com/problems/design-hashmap/" },
                { "name": "Product of Array Except Self", "frequency": 4, "link": "https://leetcode.com/problems/product-of-array-except-self/" },
                { "name": "Path Sum III", "frequency": 4, "link": "https://leetcode.com/problems/path-sum-iii/" },
                { "name": "Set Matrix Zeroes", "frequency": 4, "link": "https://leetcode.com/problems/set-matrix-zeroes/" },
                { "name": "Word Break II", "frequency": 4, "link": "https://leetcode.com/problems/word-break-ii/" },
                { "name": "Basic Calculator", "frequency": 4, "link": "https://leetcode.com/problems/basic-calculator/" },
                { "name": "Maximum Product Subarray", "frequency": 4, "link": "https://leetcode.com/problems/maximum-product-subarray/" },
                { "name": "Max Chunks To Make Sorted II", "frequency": 4, "link": "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/" },
                { "name": "Word Search II", "frequency": 4, "link": "https://leetcode.com/problems/word-search-ii/" },
                { "name": "Min Stack", "frequency": 4, "link": "https://leetcode.com/problems/min-stack/" },
                { "name": "Binary Search Tree Iterator", "frequency": 4, "link": "https://leetcode.com/problems/binary-search-tree-iterator/" },
                { "name": "Number of 1 Bits", "frequency": 4, "link": "https://leetcode.com/problems/number-of-1-bits/" },
                { "name": "Maximum Sum of Two Non-Overlapping Subarrays", "frequency": 3, "link": "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/" },
                { "name": "Remove Nth Node From End of List", "frequency": 3, "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
                { "name": "Max Area of Island", "frequency": 3, "link": "https://leetcode.com/problems/max-area-of-island/" }

            ]
        },

        {
            "name": "Salesforce",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { "name": "Stickers to Spell Word", "frequency": 7, "link": "https://leetcode.com/problems/stickers-to-spell-word/" },
                { "name": "IPO", "frequency": 5, "link": "https://leetcode.com/problems/ipo/" },
                { "name": "Reconstruct Original Digits from English", "frequency": 4, "link": "https://leetcode.com/problems/reconstruct-original-digits-from-english/" },
                { "name": "Koko Eating Bananas", "frequency": 4, "link": "https://leetcode.com/problems/koko-eating-bananas/" },
                { "name": "Merge Intervals", "frequency": 4, "link": "https://leetcode.com/problems/merge-intervals/" },
                { "name": "Rotting Oranges", "frequency": 3, "link": "https://leetcode.com/problems/rotting-oranges/" },
                { "name": "Russian Doll Envelopes", "frequency": 2, "link": "https://leetcode.com/problems/russian-doll-envelopes/" },
                { "name": "Nested List Weight Sum", "frequency": 2, "link": "https://leetcode.com/problems/nested-list-weight-sum/" },
                { "name": "Product of Array Except Self", "frequency": 2, "link": "https://leetcode.com/problems/product-of-array-except-self/" },
                { "name": "Non-overlapping Intervals", "frequency": 2, "link": "https://leetcode.com/problems/non-overlapping-intervals/" },
                { "name": "Best Time to Buy and Sell Stock", "frequency": 2, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { "name": "Validate Binary Search Tree", "frequency": 2, "link": "https://leetcode.com/problems/validate-binary-search-tree/" },
                { "name": "Decode Ways", "frequency": 2, "link": "https://leetcode.com/problems/decode-ways/" },
                { "name": "Largest Rectangle in Histogram", "frequency": 2, "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
                { "name": "Longest Palindromic Substring", "frequency": 2, "link": "https://leetcode.com/problems/longest-palindromic-substring/" },
                { "name": "Jump Game II", "frequency": 2, "link": "https://leetcode.com/problems/jump-game-ii/" },
                { "name": "Trapping Rain Water", "frequency": 2, "link": "https://leetcode.com/problems/trapping-rain-water/" },
                { "name": "First Missing Positive", "frequency": 2, "link": "https://leetcode.com/problems/first-missing-positive/" },
                { "name": "Binary Tree Right Side View", "frequency": 2, "link": "https://leetcode.com/problems/binary-tree-right-side-view/" }
            ]
        },      
        
        {
            "name": "Uber",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { "name": "Bus Routes", "frequency": 40, "link": "https://leetcode.com/problems/bus-routes/" },
                { "name": "Find the Closest Palindrome", "frequency": 19, "link": "https://leetcode.com/problems/find-the-closest-palindrome/" },
                { "name": "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", "frequency": 15, "link": "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/" },
                { "name": "Leftmost Column with at Least a One", "frequency": 15, "link": "https://leetcode.com/problems/leftmost-column-with-at-least-a-one/" },
                { "name": "Merge Intervals", "frequency": 13, "link": "https://leetcode.com/problems/merge-intervals/" },
                { "name": "Kth Smallest Element in a BST", "frequency": 12, "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
                { "name": "Number of Islands", "frequency": 12, "link": "https://leetcode.com/problems/number-of-islands/" },
                { "name": "Word Search II", "frequency": 12, "link": "https://leetcode.com/problems/word-search-ii/" },
                { "name": "Evaluate Division", "frequency": 12, "link": "https://leetcode.com/problems/evaluate-division/" },
                { "name": "Word Search", "frequency": 11, "link": "https://leetcode.com/problems/word-search/" },
                { "name": "Construct Quad Tree", "frequency": 10, "link": "https://leetcode.com/problems/construct-quad-tree/" },
                { "name": "Longest Repeating Character Replacement", "frequency": 10, "link": "https://leetcode.com/problems/longest-repeating-character-replacement/" },
                { "name": "Top K Frequent Words", "frequency": 10, "link": "https://leetcode.com/problems/top-k-frequent-words/" },
                { "name": "Two Sum", "frequency": 9, "link": "https://leetcode.com/problems/two-sum/" },
                { "name": "Insert Delete GetRandom O(1)", "frequency": 8, "link": "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
                { "name": "Text Justification", "frequency": 8, "link": "https://leetcode.com/problems/text-justification/" },
                { "name": "Bomb Enemy", "frequency": 7, "link": "https://leetcode.com/problems/bomb-enemy/" },
                { "name": "Burst Balloons", "frequency": 7, "link": "https://leetcode.com/problems/burst-balloons/" },
                { "name": "Minimum Time to Complete Trips", "frequency": 7, "link": "https://leetcode.com/problems/minimum-time-to-complete-trips/" },
                { "name": "Longest Substring Without Repeating Characters", "frequency": 7, "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                { "name": "Median of Two Sorted Arrays", "frequency": 7, "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
                { "name": "Longest Palindromic Substring", "frequency": 6, "link": "https://leetcode.com/problems/longest-palindromic-substring/" },
                { "name": "Find First and Last Position of Element in Sorted Array", "frequency": 6, "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
                { "name": "My Calendar I", "frequency": 6, "link": "https://leetcode.com/problems/my-calendar-i/" },
                { "name": "Add Two Numbers", "frequency": 6, "link": "https://leetcode.com/problems/add-two-numbers/" },
                { "name": "Exam Room", "frequency": 6, "link": "https://leetcode.com/problems/exam-room/" },
                { "name": "Shuffle an Array", "frequency": 5, "link": "https://leetcode.com/problems/shuffle-an-array/" },
                { "name": "Serialize and Deserialize Binary Tree", "frequency": 5, "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
                { "name": "Next Palindrome Using Same Digits", "frequency": 5, "link": "https://leetcode.com/problems/next-palindrome-using-same-digits/" },
                { "name": "Decode String", "frequency": 5, "link": "https://leetcode.com/problems/decode-string/" },
                { "name": "Longest Common Prefix", "frequency": 5, "link": "https://leetcode.com/problems/longest-common-prefix/" },
                { "name": "Optimal Account Balancing", "frequency": 5, "link": "https://leetcode.com/problems/optimal-account-balancing/" },
                { "name": "3Sum", "frequency": 5, "link": "https://leetcode.com/problems/3sum/" },
                { "name": "Letter Combinations of a Phone Number", "frequency": 5, "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
                { "name": "Meeting Rooms II", "frequency": 5, "link": "https://leetcode.com/problems/meeting-rooms-ii/" },
                { "name": "Find Peak Element", "frequency": 5, "link": "https://leetcode.com/problems/find-peak-element/" },
                { "name": "Frequency of the Most Frequent Element", "frequency": 5, "link": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/" },
                { "name": "Valid Parentheses", "frequency": 4, "link": "https://leetcode.com/problems/valid-parentheses/" },
                { "name": "Top K Frequent Elements", "frequency": 4, "link": "https://leetcode.com/problems/top-k-frequent-elements/" },
                { "name": "Merge Two Sorted Lists", "frequency": 4, "link": "https://leetcode.com/problems/merge-two-sorted-lists/" },
                { "name": "Binary Subarrays With Sum", "frequency": 4, "link": "https://leetcode.com/problems/binary-subarrays-with-sum/" },
                { "name": "Binary Search", "frequency": 4, "link": "https://leetcode.com/problems/binary-search/" },
                { "name": "Generate Parentheses", "frequency": 4, "link": "https://leetcode.com/problems/generate-parentheses/" },
                { "name": "Merge k Sorted Lists", "frequency": 4, "link": "https://leetcode.com/problems/merge-k-sorted-lists/" },
                { "name": "Valid Sudoku", "frequency": 4, "link": "https://leetcode.com/problems/valid-sudoku/" },
                { "name": "Trapping Rain Water", "frequency": 4, "link": "https://leetcode.com/problems/trapping-rain-water/" },
                { "name": "Rotate Image", "frequency": 4, "link": "https://leetcode.com/problems/rotate-image/" },
                { "name": "Course Schedule", "frequency": 4, "link": "https://leetcode.com/problems/course-schedule/" },
                { "name": "Group Anagrams", "frequency": 4, "link": "https://leetcode.com/problems/group-anagrams/" },
                { "name": "Rotting Oranges", "frequency": 4, "link": "https://leetcode.com/problems/rotting-oranges/" },
                { "name": "Two Sum II - Input Array Is Sorted", "frequency": 4, "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
                { "name": "Reorganize String", "frequency": 4, "link": "https://leetcode.com/problems/reorganize-string/" },
                { "name": "Candy", "frequency": 4, "link": "https://leetcode.com/problems/candy/" },
                { "name": "Best Position for a Service Centre", "frequency": 4, "link": "https://leetcode.com/problems/best-position-for-a-service-centre/" },
                { "name": "Best Time to Buy and Sell Stock", "frequency": 4, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { "name": "Next Permutation", "frequency": 3, "link": "https://leetcode.com/problems/next-permutation/" },
                { "name": "Shortest Path in a Grid with Obstacles Elimination", "frequency": 3, "link": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/" },
                { "name": "Minimum Path Sum", "frequency": 3, "link": "https://leetcode.com/problems/minimum-path-sum/" },
                { "name": "LRU Cache", "frequency": 3, "link": "https://leetcode.com/problems/lru-cache/" },
                { "name": "Maximum Subarray", "frequency": 3, "link": "https://leetcode.com/problems/maximum-subarray/" },
                { "name": "Isomorphic Strings", "frequency": 3, "link": "https://leetcode.com/problems/isomorphic-strings/" },
                { "name": "Interval List Intersections", "frequency": 3, "link": "https://leetcode.com/problems/interval-list-intersections/" }
            ]
        },
        
        {
            "name": "Nvidia",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { "name": "Minimum Knight Moves", "frequency": 2, "link": "https://leetcode.com/problems/minimum-knight-moves/" },
                { "name": "Merge Sorted Array", "frequency": 2, "link": "https://leetcode.com/problems/merge-sorted-array/" },
                { "name": "Valid Sudoku", "frequency": 2, "link": "https://leetcode.com/problems/valid-sudoku/" }
            ]
        },
        
        {
            "name": "Intuit",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { "name": "Find First and Last Position of Element in Sorted Array", "frequency": 4, "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
                { "name": "Subdomain Visit Count", "frequency": 3, "link": "https://leetcode.com/problems/subdomain-visit-count/" },
                { "name": "Palindrome Linked List", "frequency": 3, "link": "https://leetcode.com/problems/palindrome-linked-list/" },
                { "name": "Course Schedule", "frequency": 3, "link": "https://leetcode.com/problems/course-schedule/" },
                { "name": "Number of Islands", "frequency": 3, "link": "https://leetcode.com/problems/number-of-islands/" },
                { "name": "Maximum Length of Repeated Subarray", "frequency": 2, "link": "https://leetcode.com/problems/maximum-length-of-repeated-subarray/" },
                { "name": "Find Median from Data Stream", "frequency": 2, "link": "https://leetcode.com/problems/find-median-from-data-stream/" },
                { "name": "Design Circular Queue", "frequency": 2, "link": "https://leetcode.com/problems/design-circular-queue/" },
                { "name": "Rotting Oranges", "frequency": 2, "link": "https://leetcode.com/problems/rotting-oranges/" },
                { "name": "Course Schedule II", "frequency": 2, "link": "https://leetcode.com/problems/course-schedule-ii/" },
                { "name": "Sum of Nodes with Even-Valued Grandparent", "frequency": 2, "link": "https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/" },
                { "name": "Reorganize String", "frequency": 2, "link": "https://leetcode.com/problems/reorganize-string/" },
                { "name": "LRU Cache", "frequency": 2, "link": "https://leetcode.com/problems/lru-cache/" },
                { "name": "Interleaving String", "frequency": 2, "link": "https://leetcode.com/problems/interleaving-string/" },
                { "name": "Sudoku Solver", "frequency": 2, "link": "https://leetcode.com/problems/sudoku-solver/" },
                { "name": "Kth Largest Element in an Array", "frequency": 2, "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/" }
            ]
        },
        
        {
            "name": "Citadel",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { "name": "Subarray Sums Divisible by K", "frequency": 36, "link": "https://leetcode.com/problems/subarray-sums-divisible-by-k/" },
                { "name": "Range Addition", "frequency": 10, "link": "https://leetcode.com/problems/range-addition/" },
                { "name": "Smallest Range II", "frequency": 8, "link": "https://leetcode.com/problems/smallest-range-ii/" },
                { "name": "Minimum Costs Using the Train Line", "frequency": 6, "link": "https://leetcode.com/problems/minimum-costs-using-the-train-line/" },
                { "name": "Integer to Roman", "frequency": 3, "link": "https://leetcode.com/problems/integer-to-roman/" },
                { "name": "Sliding Window Maximum", "frequency": 3, "link": "https://leetcode.com/problems/sliding-window-maximum/" },
                { "name": "Subarray Sum Equals K", "frequency": 2, "link": "https://leetcode.com/problems/subarray-sum-equals-k/" },
                { "name": "The Maze", "frequency": 2, "link": "https://leetcode.com/problems/the-maze/" },
                { "name": "Design In-Memory File System", "frequency": 2, "link": "https://leetcode.com/problems/design-in-memory-file-system/" },
                { "name": "Asteroid Collision", "frequency": 2, "link": "https://leetcode.com/problems/asteroid-collision/" },
                { "name": "Transpose Matrix", "frequency": 2, "link": "https://leetcode.com/problems/transpose-matrix/" },
                { "name": "Minimum Size Subarray Sum", "frequency": 2, "link": "https://leetcode.com/problems/minimum-size-subarray-sum/" },
                { "name": "Best Time to Buy and Sell Stock III", "frequency": 2, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" },
                { "name": "Best Time to Buy and Sell Stock", "frequency": 2, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { "name": "Permutations", "frequency": 2, "link": "https://leetcode.com/problems/permutations/" },
                { "name": "Insert Delete GetRandom O(1)", "frequency": 2, "link": "https://leetcode.com/problems/insert-delete-getrandom-o1/" }
            ]
        },
        
        {
            "name": "Hudson River Trading",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { "name": "Verbal Arithmetic Puzzle", "frequency": 12, "link": "https://leetcode.com/problems/verbal-arithmetic-puzzle/" },
                { "name": "Remove Comments", "frequency": 5, "link": "https://leetcode.com/problems/remove-comments/" },
                { "name": "Split Array Largest Sum", "frequency": 4, "link": "https://leetcode.com/problems/split-array-largest-sum/" },
                { "name": "Add Binary", "frequency": 3, "link": "https://leetcode.com/problems/add-binary/" },
                { "name": "First Missing Positive", "frequency": 2, "link": "https://leetcode.com/problems/first-missing-positive/" }
            ]
        },
        
        {
            "name": "Adobe",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { "name": "Two Sum", "frequency": 63, "link": "https://leetcode.com/problems/two-sum/" },
                { "name": "Roman to Integer", "frequency": 38, "link": "https://leetcode.com/problems/roman-to-integer/" },
                { "name": "Valid Parentheses", "frequency": 17, "link": "https://leetcode.com/problems/valid-parentheses/" },
                { "name": "Add Two Numbers", "frequency": 16, "link": "https://leetcode.com/problems/add-two-numbers/" },
                { "name": "Best Time to Buy and Sell Stock", "frequency": 15, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { "name": "Longest Substring Without Repeating Characters", "frequency": 14, "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                { "name": "Rotate Image", "frequency": 11, "link": "https://leetcode.com/problems/rotate-image/" },
                { "name": "Climbing Stairs", "frequency": 11, "link": "https://leetcode.com/problems/climbing-stairs/" },
                { "name": "Merge Intervals", "frequency": 11, "link": "https://leetcode.com/problems/merge-intervals/" },
                { "name": "Maximum Subarray", "frequency": 10, "link": "https://leetcode.com/problems/maximum-subarray/" },
                { "name": "3Sum", "frequency": 10, "link": "https://leetcode.com/problems/3sum/" },
                { "name": "Median of Two Sorted Arrays", "frequency": 10, "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
                { "name": "Pascal's Triangle", "frequency": 9, "link": "https://leetcode.com/problems/pascals-triangle/" },
                { "name": "Running Sum of 1d Array", "frequency": 9, "link": "https://leetcode.com/problems/running-sum-of-1d-array/" },
                { "name": "Largest Rectangle in Histogram", "frequency": 8, "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
                { "name": "Longest Palindromic Substring", "frequency": 8, "link": "https://leetcode.com/problems/longest-palindromic-substring/" },
                { "name": "Reverse Integer", "frequency": 8, "link": "https://leetcode.com/problems/reverse-integer/" },
                { "name": "Number of Islands", "frequency": 8, "link": "https://leetcode.com/problems/number-of-islands/" },
                { "name": "Contains Duplicate", "frequency": 8, "link": "https://leetcode.com/problems/contains-duplicate/" },
                { "name": "N-Queens", "frequency": 7, "link": "https://leetcode.com/problems/n-queens/" }
            ]
        },
        
        {
            "name": "Oracle",
            "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
            "problems": [
                { "name": "Two Sum", "frequency": 7, "link": "https://leetcode.com/problems/two-sum/" },
                { "name": "Remove Duplicate Letters", "frequency": 5, "link": "https://leetcode.com/problems/remove-duplicate-letters/" },
                { "name": "Roman to Integer", "frequency": 4, "link": "https://leetcode.com/problems/roman-to-integer/" },
                { "name": "Best Time to Buy and Sell Stock", "frequency": 3, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { "name": "Valid Parentheses", "frequency": 3, "link": "https://leetcode.com/problems/valid-parentheses/" },
                { "name": "Generate Parentheses", "frequency": 3, "link": "https://leetcode.com/problems/generate-parentheses/" },
                { "name": "Group Anagrams", "frequency": 3, "link": "https://leetcode.com/problems/group-anagrams/" },
                { "name": "Minimum Moves to Equal Array Elements", "frequency": 3, "link": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements/" },
                { "name": "Minimum Window Substring", "frequency": 3, "link": "https://leetcode.com/problems/minimum-window-substring/" },
                { "name": "Integer to Roman", "frequency": 3, "link": "https://leetcode.com/problems/integer-to-roman/" },
                { "name": "Merge Sorted Array", "frequency": 3, "link": "https://leetcode.com/problems/merge-sorted-array/" },
                { "name": "LRU Cache", "frequency": 3, "link": "https://leetcode.com/problems/lru-cache/" },
                { "name": "Number of Islands", "frequency": 3, "link": "https://leetcode.com/problems/number-of-islands/" },
                { "name": "Lowest Common Ancestor of a Binary Tree", "frequency": 3, "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
                { "name": "Reverse Linked List", "frequency": 3, "link": "https://leetcode.com/problems/reverse-linked-list/" },
                { "name": "Maximum Subarray", "frequency": 2, "link": "https://leetcode.com/problems/maximum-subarray/" },
                { "name": "Meeting Rooms II", "frequency": 2, "link": "https://leetcode.com/problems/meeting-rooms-ii/" },
                { "name": "Evaluate Reverse Polish Notation", "frequency": 2, "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
                { "name": "Missing Number", "frequency": 2, "link": "https://leetcode.com/problems/missing-number/" },
                { "name": "Design Browser History", "frequency": 2, "link": "https://leetcode.com/problems/design-browser-history/" }
            ]
        },
        
        // {
        //     "name": "Test",
        //     "image": "https://imgs.search.brave.com/fSE9A9qxkNGyiDZlbpSNBQxFCGIT1ayykzyrWkV3Bic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtYmxhY2st/Y29uY3JldGUtdGV4/dHVyZWQtYmFja2dy/b3VuZF81Mzg3Ni0x/MjQ1NDEuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
        //     "problems": [
        //         {name: "Two Sum", frequency: 46, link: "https://leetcode.com/problems/two-sum/description/"}
        //     ]
        // },
        
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

        const companyHeader = document.createElement('div');
        companyHeader.classList.add('company-header');

        const companyNameDiv = document.createElement('div');
        companyNameDiv.classList.add('company-name');

        const companyNameParts = company.name.split(' ');

        companyNameParts.forEach((part, index) => {
            const partSpan = document.createElement('span');
            partSpan.textContent = part;

            // Set text color to white for "Salesforce"
            if (company.name === 'Salesforce') {
                partSpan.style.color = 'white';
            }

            companyNameDiv.appendChild(partSpan);

            // Add space between name parts, except for the last part
            if (index < companyNameParts.length - 1) {
                companyNameDiv.appendChild(document.createTextNode(' '));
            }
        });

        const button = document.createElement('button');
        button.classList.add('learn-more');
        button.innerHTML = '<div class="circle"><div class="icon arrow"></div></div><span class="button-text">Learn More</span>';

        button.addEventListener('click', function () {
            const problemsList = companyDiv.querySelector('.problems-list');
            problemsList.style.display = problemsList.style.display === 'block' ? 'none' : 'block';
        });

        companyHeader.appendChild(companyNameDiv);
        companyHeader.appendChild(button);
        companyDiv.appendChild(companyHeader);

        const problemsList = document.createElement('div');
        problemsList.classList.add('problems-list');
        problemsList.style.display = 'none'; // Set initial display to none

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
