export class HtmlEscape {
  /**
   * markdown 注入脚本转义
   * @param markdown 需要转义的markdown字符串
   */
  public static htmlEncode( markdown: string ) {
    const result = [];
    const arr = markdown.split( '' );
    // 为了arr[i+1]不溢出
    arr.push( '' );
    let counter = 0;
    for ( let i = 0; i < arr.length - 1; i++ ) {
      if ( arr[ i ] === '`' ) {
        counter++;
        result.push( arr[ i ] );
      } else {
        if ( counter === 1 || counter === 3 ) {
          result.push( arr[ i ] );
        } else if ( counter === 2 || counter === 6 || counter === 0 ) {
          counter = 0;
          if ( arr[ i ] === '<' ) {
            result.push( '&lt;' );
          } else if ( arr[ i ] === '>' ) {
            // 排除引用的>符号
            if ( result[ result.length - 1 ] === '\n' ) {
              result.push( '>' );
            } else {
              result.push( '&gt;' );
            }
          } else {
            result.push( arr[ i ] );
          }
        }
      }
    }
    return result.join( '' );
  }
}
