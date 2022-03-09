# Sorting Algorithms

## [Table of Contents](#table-of-contents) 
  - [The Concept](#the-concept)
  - [Classifications](#classifications)
  - [Comparison of Algorithms](#comparison-of-algorithms)
    - [Comparison Sorts](#comparison-sorts)
    - [Non-comparison Sorts](#non-comparison-sorts)
    - [Others](#others)

&nbsp;

## The Concept
In computer science, a **sorting algorithm** is an algorithm that puts elements of a list into an order.  
The most frequently used orders are **numerical order** and **lexicographical order**, and **either ascending** or **descending**.  
Efficient sorting is important for optimizing the efficiency of other algorithms (such as **search** and **merge** algorithms) that require input data to be in sorted lists.  
Sorting is also often useful for canonicalizing data and for producing human-readable output.

Formally, the output of any sorting algorithm must satisfy two conditions:
- The output is in **monotonic** order (each element is no smaller/larger than the previous element, according to the required order).
- The output is a **permutation** (a reordering, yet retaining all of the original elements) of the input.

&nbsp;

## Classifications
Sorting algorithms can be classified by:  
- **Computational complexity**
    - **Best**, **worst** and **average** case behavior in terms of the size of the list.  
    For typical serial sorting algorithms, **good behavior is O(n log n)**, with parallel sort in **O(log2 n)**, and **bad behavior is O(n^2)**.  
    Ideal behavior for a serial sort is **O(n)**, but this is not possible in the average case. Optimal parallel sorting is **O(log n)**.
    - Swaps for "in-place" algorithms.
- **Memory usage** (and use of other computer resources).  
In particular, some sorting algorithms are "in-place".  
Strictly, an in-place sort needs only O(1) memory beyond the items being sorted;  
sometimes O(log n) additional memory is considered "in-place".
- **Recursion**: Some algorithms are either recursive or non-recursive, while others may be both (e.g., merge sort).
- **Stability**: stable sorting algorithms maintain the relative order of records with equal keys (i.e., values).
- Whether or not they are a **comparison sort**.  
A comparison sort examines the data only by comparing two elements with a comparison operator.
- **General method**: insertion, exchange, selection, merging, etc.  
Exchange sorts include bubble sort and quicksort. Selection sorts include cycle sort and heapsort.
The remainder of this discussion almost exclusively concentrates upon serial algorithms and assumes serial operation.
- **Adaptability**: Whether or not the presortedness of the input affects the running time.  
Algorithms that take this into account are known to be adaptive.

## Comparison of Algorithms
In these tables, `n` is the number of records to be sorted.  
The columns "**Best**", "**Average**" and "**Worst**" give the time complexity in each case,  
under the assumption that the length of each key is constant, and therefore that all comparisons,  
swaps and other operations can proceed in constant time.  
"**Memory**" denotes the amount of extra storage needed additionally to that used by the list itself,  
under the same assumption. The run times and the memory requirements listed are inside big O notation,  
hence the base of the logarithms does not matter.
&nbsp;

### Comparison Sorts
Below is a table of comparison sorts. A comparison sort cannot perform better than O(n log n) on average.  

<table class="wikitable sortable jquery-tablesorter">
<caption><a href="/wiki/Comparison_sort" title="Comparison sort">Comparison sorts</a>
</caption>
<thead><tr>
<th class="headerSort headerSortDown" tabindex="0" role="columnheader button" title="Sort initial">Name</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Best</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Average</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Worst</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Memory</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Stable</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Method</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Other notes
</th></tr></thead><tbody>























<tr align="center">
<td><a href="/wiki/Tree_sort" title="Tree sort">Tree sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span><wbr>(balanced)</span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Insertion
</td>
<td align="left">When using a <a href="/wiki/Self-balancing_binary_search_tree" title="Self-balancing binary search tree">self-balancing binary search tree</a>.
</td></tr><tr align="center">
<td><a href="/wiki/Tournament_sort" title="Tournament sort">Tournament sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span><sup id="cite_ref-11" class="reference"><a href="#cite_note-11">[11]</a></sup></span>
</td>
<td style="background:#fdd">No
</td>
<td>Selection
</td>
<td align="left">Variation of Heapsort.
</td></tr><tr align="center">
<td><a href="/wiki/Timsort" title="Timsort">Timsort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Insertion &amp; Merging
</td>
<td align="left">Makes <i>n-1</i> comparisons when the data is already sorted or reverse sorted.
</td></tr><tr align="center">
<td><a href="/wiki/Strand_sort" title="Strand sort">Strand sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Selection
</td>
<td align="left">
</td></tr><tr align="center">
<td><a href="/wiki/Smoothsort" title="Smoothsort">Smoothsort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#fdd">No
</td>
<td>Selection
</td>
<td align="left">An <a href="/wiki/Adaptive_sort" title="Adaptive sort">adaptive</a> variant of heapsort based upon the <a href="/wiki/Leonardo_number" title="Leonardo number">Leonardo sequence</a> rather than a traditional <a href="/wiki/Binary_heap" title="Binary heap">binary heap</a>.
</td></tr><tr align="center">
<td><a href="/wiki/Shellsort" title="Shellsort">Shellsort</a>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#ffd"><span data-sort-value="23&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{4/3}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>4</mn>
            <mrow class="MJX-TeXAtom-ORD">
              <mo>/</mo>
            </mrow>
            <mn>3</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{4/3}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/58700f91e1128751a77a128ffa8c515747cd671d" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:4.093ex; height:2.843ex;" alt="{\displaystyle n^{4/3}}"></span></span>
</td>
<td style="background:#ffd"><span data-sort-value="23&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{3/2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>3</mn>
            <mrow class="MJX-TeXAtom-ORD">
              <mo>/</mo>
            </mrow>
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{3/2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/7101d69221defce7e4590ac55cfb4f22ea1732b2" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:4.093ex; height:2.843ex;" alt="n^{3/2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#fdd">No
</td>
<td>Insertion
</td>
<td align="left">Small code size.
</td></tr><tr align="center">
<td><a href="/wiki/Selection_sort" title="Selection sort">Selection sort</a>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#fdd">No
</td>
<td>Selection
</td>
<td align="left">Stable with <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle O(n)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>O</mi>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle O(n)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:4.977ex; height:2.843ex;" alt="O(n)"></span> extra space, when using linked lists, or when made as a variant of Insertion Sort instead of swapping the two items.<sup id="cite_ref-10" class="reference"><a href="#cite_note-10">[10]</a></sup>
</td></tr><tr align="center">
<td><a href="/wiki/Quicksort" title="Quicksort">Quicksort</a>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#ffd"><span data-sort-value="05&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle \log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/317ab5292da7c7935aec01a570461fe0613b21d5" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:4.754ex; height:2.509ex;" alt="\log n"></span></span>
</td>
<td style="background:#fdd">No
</td>
<td>Partitioning
</td>
<td align="left">Quicksort is usually done in-place with <span class="texhtml"><i>O</i>(log <i>n</i>)</span> stack space.<sup id="cite_ref-5" class="reference"><a href="#cite_note-5">[5]</a></sup><sup id="cite_ref-sedgewickQsortPaper_6-0" class="reference"><a href="#cite_note-sedgewickQsortPaper-6">[6]</a></sup>
</td></tr><tr align="center">
<td><a href="/wiki/Patience_sorting" title="Patience sorting">Patience sorting</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd">No
</td>
<td>Insertion &amp; Selection
</td>
<td align="left">Finds all the <a href="/wiki/Longest_increasing_subsequence" title="Longest increasing subsequence">longest increasing subsequences</a> in <span class="texhtml"><i>O</i>(<i>n</i> log <i>n</i>)</span>.
</td></tr><tr align="center">
<td><a href="/wiki/Odd%E2%80%93even_sort" title="Odd–even sort">Odd–even sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Exchanging
</td>
<td align="left">Can be run on parallel processors easily.
</td></tr><tr align="center">
<td><a href="/wiki/Merge_sort" title="Merge sort">Merge sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Merging
</td>
<td align="left"><a href="/wiki/Merge_sort#Parallel_merge_sort" title="Merge sort">Highly parallelizable</a> (up to <span class="texhtml"><i>O</i>(log <i>n</i>)</span> using the Three Hungarians' Algorithm).<sup id="cite_ref-7" class="reference"><a href="#cite_note-7">[7]</a></sup>
</td></tr><tr align="center">
<td><a href="/wiki/Library_sort" title="Library sort">Library sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd">No
</td>
<td>Insertion
</td>
<td align="left">Similar to a gapped insertion sort. It requires randomly permuting the input to warrant with-high-probability time bounds, which makes it not stable.
</td></tr><tr align="center">
<td><a href="/wiki/Introsort" title="Introsort">Introsort</a>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#ffd"><span data-sort-value="05&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle \log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/317ab5292da7c7935aec01a570461fe0613b21d5" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:4.754ex; height:2.509ex;" alt="\log n"></span></span>
</td>
<td style="background:#fdd">No
</td>
<td>Partitioning &amp; Selection
</td>
<td align="left">Used in several <a href="/wiki/Standard_Template_Library" title="Standard Template Library">STL</a> implementations.
</td></tr><tr align="center">
<td><a href="/wiki/Insertion_sort" title="Insertion sort">Insertion sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Insertion
</td>
<td align="left"><span class="texhtml"><i>O</i>(<i>n</i> + <i>d</i>)</span>, in the worst case over sequences that have <i>d</i> <a href="/wiki/Inversion_(discrete_mathematics)" title="Inversion (discrete mathematics)">inversions</a>.
</td></tr><tr align="center">
<td nowrap=""><a href="/wiki/In-place_merge_sort" class="mw-redirect" title="In-place merge sort">In-place merge sort</a>
</td>
<td>—
</td>
<td>—
</td>
<td style="background:#ffd"><span data-sort-value="23&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log ^{2}n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <msup>
          <mi>log</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log ^{2}n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/8dcc3d3ab4d647731efd75119a13e8febd1a7e44" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:7.59ex; height:3.009ex;" alt="n\log ^{2}n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Merging
</td>
<td align="left">Can be implemented as a stable sort based on stable in-place merging.<sup id="cite_ref-8" class="reference"><a href="#cite_note-8">[8]</a></sup>
</td></tr><tr align="center">
<td><a href="/wiki/Heapsort" title="Heapsort">Heapsort</a>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#fdd">No
</td>
<td>Selection
</td>
<td align="left">
</td></tr><tr align="center">
<td><a href="/wiki/Gnome_sort" title="Gnome sort">Gnome sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Exchanging
</td>
<td align="left">Tiny code size.
</td></tr><tr align="center">
<td><a href="#Exchange_sort">Exchange sort</a>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Exchanging
</td>
<td align="left">Tiny code size.
</td></tr><tr align="center">
<td><a href="/wiki/Cycle_sort" title="Cycle sort">Cycle sort</a>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#fdd">No
</td>
<td>Selection
</td>
<td align="left">In-place with theoretically optimal number of writes.
</td></tr><tr align="center">
<td><a href="/wiki/Cubesort" title="Cubesort">Cubesort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Insertion
</td>
<td align="left">Makes <i>n-1</i> comparisons when the data is already sorted or reverse sorted.
</td></tr><tr align="center">
<td><a href="/wiki/Comb_sort" title="Comb sort">Comb sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#fdd">No
</td>
<td>Exchanging
</td>
<td align="left">Faster than bubble sort on average.
</td></tr><tr align="center">
<td><a href="/wiki/Cocktail_shaker_sort" title="Cocktail shaker sort">Cocktail shaker sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Exchanging
</td>
<td align="left">A variant of Bubblesort which deals well with small values at end of list
</td></tr><tr align="center">
<td><a href="/wiki/Bubble_sort" title="Bubble sort">Bubble sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Exchanging
</td>
<td align="left">Tiny code size.
</td></tr><tr align="center">
<td><a href="/wiki/Block_sort" title="Block sort">Block sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="20&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/560dfdce0353a330e03e4b3e0b7ca6e484bb40fb" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:6.535ex; height:2.509ex;" alt="n\log n"></span></span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#dfd">Yes
</td>
<td>Insertion &amp; Merging
</td>
<td align="left">Combine a block-based <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle O(n)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>O</mi>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle O(n)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:4.977ex; height:2.843ex;" alt="O(n)"></span> in-place merge algorithm<sup id="cite_ref-9" class="reference"><a href="#cite_note-9">[9]</a></sup> with a <a href="/wiki/Merge_sort#Bottom-up_implementation" title="Merge sort">bottom-up merge sort</a>.
</td></tr></tbody><tfoot></tfoot></table>

### Non-comparison Sorts
The following table describes integer sorting algorithms and other sorting algorithms that are not comparison sorts.  
Complexities below assume `n` items to be sorted, with keys of size `k`, digit size `d`, and `r` the range of numbers to be sorted.  
Many of them are based on the assumption that the key size is large enough that all entries have unique key values.

<table class="wikitable sortable jquery-tablesorter">
<caption>Non-comparison sorts
</caption>
<thead><tr>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Name</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Best</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Average</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Worst</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Memory</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Stable</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"><span class="texhtml"><i>n</i> ≪ 2<sup><i>k</i></sup></span></th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Notes
</th></tr></thead><tbody>
<tr align="center">
<td><a href="/wiki/Pigeonhole_sort" title="Pigeonhole sort">Pigeonhole sort</a>
</td>
<td>—
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+2^{k}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <msup>
          <mn>2</mn>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>k</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+2^{k}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ec2a3b940ba9a9ad932d9ae1c0206ae0ceab86dc" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:6.486ex; height:2.843ex;" alt="n+2^{k}"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+2^{k}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <msup>
          <mn>2</mn>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>k</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+2^{k}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ec2a3b940ba9a9ad932d9ae1c0206ae0ceab86dc" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:6.486ex; height:2.843ex;" alt="n+2^{k}"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle 2^{k}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mn>2</mn>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>k</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle 2^{k}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2d82641ae2702b0db07dd11830af27b9ee0cd196" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.251ex; height:2.676ex;" alt="2^{k}"></span>
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td align="left">Cannot sort non-integers.
</td></tr>
<tr align="center">
<td><a href="/wiki/Bucket_sort" title="Bucket sort">Bucket sort</a> (uniform keys)
</td>
<td>—
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+k}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <mi>k</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+k}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/94ccf8f07ceddde4d06fab179c36ccd2c264c243" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:5.446ex; height:2.343ex;" alt="n+k"></span>
</td>
<td style="background:#fdd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}\cdot k}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
        <mo>⋅<!-- ⋅ --></mo>
        <mi>k</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}\cdot k}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/1a8e12aa598dc98f2fa9f5dcbb0f473710d35e41" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:5.339ex; height:2.676ex;" alt="n^{2}\cdot k"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot k}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mi>k</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot k}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/c6fba7993eed5a22ecab0c0008a16e2f81f260af" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:4.285ex; height:2.176ex;" alt="n\cdot k"></span>
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td align="left">Assumes uniform distribution of elements from the domain in the array. <sup id="cite_ref-clrs_14-0" class="reference"><a href="#cite_note-clrs-14">[14]</a></sup>
<p>Also cannot sort non-integers
</p>
</td></tr>
<tr align="center">
<td><a href="/wiki/Bucket_sort" title="Bucket sort">Bucket sort</a> (integer keys)
</td>
<td>—
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+r}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <mi>r</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+r}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d6a5e6925440ca0c67b8608c15b3fc842d6b3199" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:5.284ex; height:2.176ex;" alt="n+r"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+r}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <mi>r</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+r}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d6a5e6925440ca0c67b8608c15b3fc842d6b3199" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:5.284ex; height:2.176ex;" alt="n+r"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+r}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <mi>r</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+r}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d6a5e6925440ca0c67b8608c15b3fc842d6b3199" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:5.284ex; height:2.176ex;" alt="n+r"></span>
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td align="left">If <i>r</i> is <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle O(n)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>O</mi>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle O(n)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:4.977ex; height:2.843ex;" alt="O(n)"></span>, then average time complexity is <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle O(n)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>O</mi>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle O(n)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:4.977ex; height:2.843ex;" alt="O(n)"></span>.<sup id="cite_ref-gt_15-0" class="reference"><a href="#cite_note-gt-15">[15]</a></sup>
</td></tr>
<tr align="center">
<td><a href="/wiki/Counting_sort" title="Counting sort">Counting sort</a>
</td>
<td>—
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+r}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <mi>r</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+r}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d6a5e6925440ca0c67b8608c15b3fc842d6b3199" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:5.284ex; height:2.176ex;" alt="n+r"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+r}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <mi>r</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+r}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d6a5e6925440ca0c67b8608c15b3fc842d6b3199" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:5.284ex; height:2.176ex;" alt="n+r"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+r}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <mi>r</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+r}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d6a5e6925440ca0c67b8608c15b3fc842d6b3199" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:5.284ex; height:2.176ex;" alt="n+r"></span>
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td align="left">If <i>r</i> is <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle O(n)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>O</mi>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle O(n)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:4.977ex; height:2.843ex;" alt="O(n)"></span>, then average time complexity is <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle O(n)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>O</mi>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle O(n)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:4.977ex; height:2.843ex;" alt="O(n)"></span>.<sup id="cite_ref-clrs_14-1" class="reference"><a href="#cite_note-clrs-14">[14]</a></sup>
</td></tr>
<tr align="center">
<td><a href="/wiki/Radix_sort#Least_significant_digit_radix_sorts" title="Radix sort">LSD Radix Sort</a>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:1.395ex; height:1.676ex;" alt="n"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+2^{d}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <msup>
          <mn>2</mn>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>d</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+2^{d}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/9b4a94f070d68b2a9f060bc5fd2baab07f1f1a94" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:6.49ex; height:2.843ex;" alt="n+2^{d}"></span>
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td align="left"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/1d93e141787926c8c6b7834db7efaf75512bdd14" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:2.052ex; height:5.509ex;" alt="{\frac {k}{d}}"></span> recursion levels, 2<sup><i>d</i></sup> for count array.<sup id="cite_ref-clrs_14-2" class="reference"><a href="#cite_note-clrs-14">[14]</a></sup><sup id="cite_ref-gt_15-1" class="reference"><a href="#cite_note-gt-15">[15]</a></sup>
<p>Unlike most distribution sorts, this can sort <a href="/wiki/Floating_point_numbers" class="mw-redirect" title="Floating point numbers">Floating point numbers</a>, negative numbers and more.
</p>
</td></tr>
<tr align="center">
<td><a href="/wiki/Radix_sort#Most_significant_digit_radix_sorts" title="Radix sort">MSD Radix Sort</a>
</td>
<td>—
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+2^{d}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <msup>
          <mn>2</mn>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>d</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+2^{d}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/9b4a94f070d68b2a9f060bc5fd2baab07f1f1a94" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:6.49ex; height:2.843ex;" alt="n+2^{d}"></span>
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td align="left">Stable version uses an external array of size <span class="texhtml mvar" style="font-style:italic;">n</span> to hold all of the bins.
<p>Same as the LSD variant, it can sort non-integers.
</p>
</td></tr>
<tr align="center">
<td><a href="/wiki/Radix_sort#Most_significant_digit_radix_sorts" title="Radix sort">MSD Radix Sort</a> (in-place)
</td>
<td>—
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{1}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mn>1</mn>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{1}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/68ed9a5fb48a08a64d0625217519af56a134ac8d" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.838ex; width:5.121ex; height:5.343ex;" alt="{\displaystyle n\cdot {\frac {k}{1}}}"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{1}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mn>1</mn>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{1}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/68ed9a5fb48a08a64d0625217519af56a134ac8d" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -1.838ex; width:5.121ex; height:5.343ex;" alt="{\displaystyle n\cdot {\frac {k}{1}}}"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle 2^{1}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mn>2</mn>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>1</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle 2^{1}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f990b8febae3ab32d873486ee5c343e8db92ceca" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.217ex; height:2.676ex;" alt="2^{1}"></span>
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td align="left">d=1 for in-place, <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle k/1}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>k</mi>
        <mrow class="MJX-TeXAtom-ORD">
          <mo>/</mo>
        </mrow>
        <mn>1</mn>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle k/1}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e1645e49f80e180ba2f7e4cec4a67607cd86e93c" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:3.536ex; height:2.843ex;" alt="{\displaystyle k/1}"></span> recursion levels, no count array.
</td></tr>
<tr align="center">
<td><a href="/wiki/Spreadsort" title="Spreadsort">Spreadsort</a>
</td>
<td style="background:#dfd"><span class="texhtml mvar" style="font-style:italic;">n</span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot \left({{\frac {k}{s}}+d}\right)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow>
          <mo>(</mo>
          <mrow class="MJX-TeXAtom-ORD">
            <mrow class="MJX-TeXAtom-ORD">
              <mfrac>
                <mi>k</mi>
                <mi>s</mi>
              </mfrac>
            </mrow>
            <mo>+</mo>
            <mi>d</mi>
          </mrow>
          <mo>)</mo>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot \left({{\frac {k}{s}}+d}\right)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2d48358944f0a173009b508f8e9699c87b382e86" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.505ex; width:12.599ex; height:6.176ex;" alt="n\cdot \left({{\frac {k}{s}}+d}\right)"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle {\frac {k}{d}}\cdot 2^{d}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
        <mo>⋅<!-- ⋅ --></mo>
        <msup>
          <mn>2</mn>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>d</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle {\frac {k}{d}}\cdot 2^{d}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/bd0c10465a6c1dbad72bbbf80315ea93de959895" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.986ex; height:5.509ex;" alt="{\frac {k}{d}}\cdot 2^{d}"></span>
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td align="left">Asymptotic are based on the assumption that <span class="texhtml"><i>n</i> ≪ 2<sup><i>k</i></sup></span>, but the algorithm does not require this.
</td></tr>
<tr align="center">
<td><a href="/wiki/Burstsort" title="Burstsort">Burstsort</a>
</td>
<td>—
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td align="left">Has better constant factor than radix sort for sorting strings. Though relies somewhat on specifics of commonly encountered strings.
</td></tr>
<tr align="center">
<td><a href="/wiki/Flashsort" title="Flashsort">Flashsort</a>
</td>
<td style="background:#dfd"><span class="texhtml mvar" style="font-style:italic;">n</span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+r}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <mi>r</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+r}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d6a5e6925440ca0c67b8608c15b3fc842d6b3199" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:5.284ex; height:2.176ex;" alt="n+r"></span>
</td>
<td style="background:#fdd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span>
</td>
<td><span class="texhtml mvar" style="font-style:italic;">n</span>
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td align="left">Requires uniform distribution of elements from the domain in the array to run in linear time. If distribution is extremely skewed then it can go quadratic if underlying sort is quadratic (it is usually an insertion sort). In-place version is not stable.
</td></tr>
<tr align="center">
<td><a href="/wiki/Postman_sort" class="mw-redirect" title="Postman sort">Postman sort</a>
</td>
<td>—
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td style="background:#dfd"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\cdot {\frac {k}{d}}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>⋅<!-- ⋅ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mfrac>
            <mi>k</mi>
            <mi>d</mi>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\cdot {\frac {k}{d}}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/53166c305a8b1af047f2e4c916c4fd8a304d40d0" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.005ex; width:5.126ex; height:5.509ex;" alt="n\cdot {\frac {k}{d}}"></span>
</td>
<td><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n+2^{d}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <mo>+</mo>
        <msup>
          <mn>2</mn>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>d</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n+2^{d}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/9b4a94f070d68b2a9f060bc5fd2baab07f1f1a94" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:6.49ex; height:2.843ex;" alt="n+2^{d}"></span>
</td>
<td>—
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td align="left">A variation of bucket sort, which works very similarly to MSD Radix Sort. Specific to post service needs.
</td></tr></tbody><tfoot></tfoot></table>


### Others
Some algorithms are slow compared to those discussed above,  
such as the **bogosort** with unbounded run time.  
These sorts are usually described for educational purposes  
in order to demonstrate how run time of algorithms is estimated.

The following table describes some sorting algorithms  
that are impractical for real-life use in traditional software contexts  
due to extremely poor performance or specialized hardware requirements.

<table class="wikitable sortable jquery-tablesorter">
<thead><tr>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Name</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Best</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Average</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Worst</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Memory</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Stable</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Comparison</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Other notes
</th></tr></thead><tbody>
<tr align="center">
<td><a href="/wiki/Bead_sort" title="Bead sort">Bead sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#ffd"><span data-sort-value="23&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">S</span></span>
</td>
<td style="background:#ffd"><span data-sort-value="23&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">S</span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; text-align: center;" class="table-na">N/A
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td align="left">Works only with positive integers. Requires specialized hardware for it to run in guaranteed <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle O(n)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>O</mi>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle O(n)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:4.977ex; height:2.843ex;" alt="O(n)"></span> time. There is a possibility for software implementation, but running time will be <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle O(S)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>O</mi>
        <mo stretchy="false">(</mo>
        <mi>S</mi>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle O(S)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ebb7fa41b252b80e5c9b7c86087194abf8d06837" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:5.082ex; height:2.843ex;" alt="{\displaystyle O(S)}"></span>, where <span class="texhtml mvar" style="font-style:italic;">S</span> is sum of all integers to be sorted, in case of small integers it can be considered to be linear.
</td></tr>
<tr align="center">
<td><a href="/wiki/Pancake_sorting" title="Pancake sorting">Simple pancake sort</a>
</td>
<td>—
</td>
<td><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td><span data-sort-value="05&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \log n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>log</mi>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle \log n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/317ab5292da7c7935aec01a570461fe0613b21d5" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:4.754ex; height:2.509ex;" alt="\log n"></span></span>
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td align="left">Count is number of flips.
</td></tr>
<tr align="center">
<td><a href="/wiki/Spaghetti_sort" title="Spaghetti sort">Spaghetti (Poll) sort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd"><span data-sort-value="25&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{2}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{2}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:2.449ex; height:2.676ex;" alt="n^{2}"></span></span>
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td>Polling
</td>
<td align="left">This is a linear-time, analog algorithm for sorting a sequence of items, requiring <i>O</i>(<i>n</i>) stack space, and the sort is stable. This requires <i>n</i> parallel processors. See <a href="/wiki/Spaghetti_sort#Analysis" title="Spaghetti sort">spaghetti sort#Analysis</a>.
</td></tr>
<tr align="center">
<td><a href="/wiki/Sorting_network" title="Sorting network">Sorting network</a>
</td>
<td><span data-sort-value="06&nbsp;!">Varies</span>
</td>
<td><span data-sort-value="06&nbsp;!">Varies</span>
</td>
<td><span data-sort-value="06&nbsp;!">Varies</span>
</td>
<td><span data-sort-value="21&nbsp;!">Varies</span>
</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; text-align: center;" class="table-na">Varies (stable sorting networks require more comparisons)
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td align="left">Order of comparisons are set in advance based on a fixed network size.<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Disputed_statement" class="mw-redirect" title="Wikipedia:Disputed statement"><span title="This claim has reliable sources with contradicting facts (November 2015)">disputed</span></a> <span class="metadata"> – <a href="/wiki/Talk:Sorting_algorithm" title="Talk:Sorting algorithm">discuss</a></span></i>]</sup>
</td></tr>
<tr align="center">
<td><a href="/wiki/Bitonic_sorter" title="Bitonic sorter">Bitonic sorter</a>
</td>
<td><span data-sort-value="06&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \log ^{2}n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>log</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle \log ^{2}n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e34157f19d9344c513937dadab5cdc8fd86731dd" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:5.808ex; height:3.009ex;" alt="\log ^{2}n"></span> parallel</span>
</td>
<td><span data-sort-value="06&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \log ^{2}n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>log</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle \log ^{2}n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e34157f19d9344c513937dadab5cdc8fd86731dd" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:5.808ex; height:3.009ex;" alt="\log ^{2}n"></span> parallel</span>
</td>
<td><span data-sort-value="06&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n\log ^{2}n}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mi>n</mi>
        <msup>
          <mi>log</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mn>2</mn>
          </mrow>
        </msup>
        <mo>⁡<!-- ⁡ --></mo>
        <mi>n</mi>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n\log ^{2}n}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/8dcc3d3ab4d647731efd75119a13e8febd1a7e44" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:7.59ex; height:3.009ex;" alt="n\log ^{2}n"></span> non-parallel</span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td align="left">An effective variation of Sorting networks.<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Disputed_statement" class="mw-redirect" title="Wikipedia:Disputed statement"><span title="This claim has reliable sources with contradicting facts (June 2021)">disputed</span></a> <span class="metadata"> – <a href="/wiki/Talk:Sorting_algorithm" title="Talk:Sorting algorithm">discuss</a></span></i>]</sup>
</td></tr>
<tr align="center">
<td><a href="/wiki/Bogosort" title="Bogosort">Bogosort</a>
</td>
<td style="background:#dfd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#fdd"><span data-sort-value="99&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle (n\times n!)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo>×<!-- × --></mo>
        <mi>n</mi>
        <mo>!</mo>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle (n\times n!)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/dbae6d0fe4f4f73c8e3261b474927a92ac9fd9b9" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.086ex; height:2.843ex;" alt="{\displaystyle (n\times n!)}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="99&nbsp;!">unbounded (certain), <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle (n\times n!)}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo>×<!-- × --></mo>
        <mi>n</mi>
        <mo>!</mo>
        <mo stretchy="false">)</mo>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle (n\times n!)}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/dbae6d0fe4f4f73c8e3261b474927a92ac9fd9b9" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:8.086ex; height:2.843ex;" alt="{\displaystyle (n\times n!)}"></span> (expected)</span>
</td>
<td style="background:#dfd"><span data-sort-value="00&nbsp;!">1</span>
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td align="left">Random shuffling. Used for example purposes only, as even the expected best-case runtime is awful.<sup id="cite_ref-Fun07_16-0" class="reference"><a href="#cite_note-Fun07-16">[16]</a></sup>
</td></tr>
<tr align="center">
<td><a href="/wiki/Stooge_sort" title="Stooge sort">Stooge sort</a>
</td>
<td style="background:#fdd"><span data-sort-value="30&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{\log 3/\log 1.5}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>log</mi>
            <mo>⁡<!-- ⁡ --></mo>
            <mn>3</mn>
            <mrow class="MJX-TeXAtom-ORD">
              <mo>/</mo>
            </mrow>
            <mi>log</mi>
            <mo>⁡<!-- ⁡ --></mo>
            <mn>1.5</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{\log 3/\log 1.5}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/4de187624d1b78cfc152f4b1fd4eb669c4f5a9fe" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:10.736ex; height:2.843ex;" alt="n^{{\log 3/\log 1.5}}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="30&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{\log 3/\log 1.5}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>log</mi>
            <mo>⁡<!-- ⁡ --></mo>
            <mn>3</mn>
            <mrow class="MJX-TeXAtom-ORD">
              <mo>/</mo>
            </mrow>
            <mi>log</mi>
            <mo>⁡<!-- ⁡ --></mo>
            <mn>1.5</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{\log 3/\log 1.5}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/4de187624d1b78cfc152f4b1fd4eb669c4f5a9fe" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:10.736ex; height:2.843ex;" alt="n^{{\log 3/\log 1.5}}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="30&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{\log 3/\log 1.5}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>log</mi>
            <mo>⁡<!-- ⁡ --></mo>
            <mn>3</mn>
            <mrow class="MJX-TeXAtom-ORD">
              <mo>/</mo>
            </mrow>
            <mi>log</mi>
            <mo>⁡<!-- ⁡ --></mo>
            <mn>1.5</mn>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{\log 3/\log 1.5}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/4de187624d1b78cfc152f4b1fd4eb669c4f5a9fe" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:10.736ex; height:2.843ex;" alt="n^{{\log 3/\log 1.5}}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td align="left">Slower than most of the sorting algorithms (even naive ones) with a time complexity of <span class="texhtml"><i>O</i>(<i>n</i><sup>log 3 / log 1.5 </sup>) = <i>O</i>(<i>n</i><sup>2.7095...</sup>)</span> Can be made stable, and is also a <a href="/wiki/Sorting_network" title="Sorting network">sorting network</a>.
</td></tr>
<tr align="center">
<td><a href="/wiki/Slowsort" title="Slowsort">Slowsort</a>
</td>
<td style="background:#fdd"><span data-sort-value="30&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{\log n}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>log</mi>
            <mo>⁡<!-- ⁡ --></mo>
            <mi>n</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{\log n}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/c403a7c02eceb7217e79eafa65de2554c56ebb02" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:5.102ex; height:2.676ex;" alt="{\displaystyle n^{\log n}}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="30&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{\log n}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>log</mi>
            <mo>⁡<!-- ⁡ --></mo>
            <mi>n</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{\log n}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/c403a7c02eceb7217e79eafa65de2554c56ebb02" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:5.102ex; height:2.676ex;" alt="{\displaystyle n^{\log n}}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="30&nbsp;!"><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle n^{\log n}}">
  <semantics>
    <mrow class="MJX-TeXAtom-ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <msup>
          <mi>n</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>log</mi>
            <mo>⁡<!-- ⁡ --></mo>
            <mi>n</mi>
          </mrow>
        </msup>
      </mstyle>
    </mrow>
    <annotation encoding="application/x-tex">{\displaystyle n^{\log n}}</annotation>
  </semantics>
</math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/c403a7c02eceb7217e79eafa65de2554c56ebb02" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:5.102ex; height:2.676ex;" alt="{\displaystyle n^{\log n}}"></span></span>
</td>
<td style="background:#fdd"><span data-sort-value="15&nbsp;!"><span class="texhtml mvar" style="font-style:italic;">n</span></span>
</td>
<td style="background:#F99;vertical-align:middle;text-align:center;" class="table-no">No
</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes
</td>
<td align="left">A multiply and surrender algorithm, antonymous with <a href="/wiki/Divide_and_conquer_algorithm" class="mw-redirect" title="Divide and conquer algorithm">divide and conquer algorithm</a>.
</td></tr></tbody><tfoot></tfoot></table>