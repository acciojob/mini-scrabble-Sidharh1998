//your code here
function SquidGameII(n, Arr) {
  let cnt = [0, 0, 0];
	for (let i = 0; i < n; i = i + 1) {
		cnt[Arr[i] % 3] += 1;
	}
	//console.log(cnt)
	if (cnt[0] % 2 === 0) {
	return cnt[1] > 0 && cnt[2] > 0;
	}
	return Math.abs(cnt[1] - cnt[2]) > 2;
}