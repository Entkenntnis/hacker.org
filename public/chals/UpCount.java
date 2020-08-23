public class UpCount {
	private long calc(int depth) {
		if (depth == 0) return 1;
		long cc = calc(depth - 1);
		return cc + (depth % 7) + ((((cc ^ depth) % 4) == 0) ? 1 : 0); 
	}
	public static void main(String[] args) {
		UpCount uc = new UpCount();
		System.out.println(uc.calc(11589));
	}
}
