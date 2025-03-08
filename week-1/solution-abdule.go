package main

import (
	"fmt"
	"regexp"
	"sort"
	"strings"
)

// 1️⃣ Multiples of 3 or 5
func Multiple3Or5(n int) int {
	sum := 0
	for i := 0; i < n; i++ {
		if i%3 == 0 || i%5 == 0 {
			sum += i
		}
	}
	return sum
	// Time Complexity: O(n) since we iterate through all numbers < n.
}

// 2️⃣ Counting Duplicates
func CountDuplicates(str string) int {
	countMap := make(map[rune]int)
	str = strings.ToLower(str) // Convert to lowercase to make it case-insensitive

	for _, ch := range str {
		countMap[ch]++
	}

	duplicates := 0
	for _, count := range countMap {
		if count > 1 {
			duplicates++
		}
	}
	return duplicates
	// Time Complexity: O(n), since we iterate over the string twice.
}

// 3️⃣ Detect Pangram
func IsPangram(sentence string) bool {
	alphabet := make(map[rune]bool)
	sentence = strings.ToLower(sentence)
	for _, ch := range sentence {
		if ch >= 'a' && ch <= 'z' {
			alphabet[ch] = true
		}
	}
	return len(alphabet) == 26
	// Time Complexity: O(n), where n is the length of the sentence.
}

// 4️⃣ Your Order, Please
func OrderWords(sentence string) string {
	if sentence == "" {
		return ""
	}

	words := strings.Fields(sentence)
	sort.Slice(words, func(i, j int) bool {
		// Find numbers in words
		re := regexp.MustCompile(`\d`)
		iNum := re.FindString(words[i])
		jNum := re.FindString(words[j])
		return iNum < jNum // This is a bit incorrect because string comparison isn't ideal for numbers
	})

	return strings.Join(words, " ")
	// Time Complexity: O(n log n) due to sorting.
}

// 5️⃣ Array Diff
func ArrayDiff(arr1, arr2 []int) []int {
	result := []int{}
	lookup := make(map[int]bool)

	// Store all values from arr2 in a map
	for _, num := range arr2 {
		lookup[num] = true
	}

	// Filter arr1 by removing elements present in arr2
	for _, num := range arr1 {
		if !lookup[num] {
			result = append(result, num)
		}
	}
	return result
	// Time Complexity: O(n + m), where n is the size of arr1 and m is the size of arr2.
}

func main() {
	fmt.Println(Multiple3Or5(10))                                         // Expected: 23
	fmt.Println(CountDuplicates("aabBcde"))                               // Expected: 2
	fmt.Println(IsPangram("The quick brown fox jumps over the lazy dog")) // Expected: true
	fmt.Println(OrderWords("is2 Thi1s T4est 3a"))                         // Expected: "Thi1s is2 3a T4est"
	fmt.Println(ArrayDiff([]int{1, 2, 2, 2, 3}, []int{2}))                // Expected: [1,3]
}
