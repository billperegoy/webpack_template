class Stooges

  def all
    {good: good, bad: bad, soso: soso}
  end

  private
  def good
    ['larry', 'curly', 'moe']
  end

  def soso
    ['shemp']
  end

  def bad
    ['joe', 'curly joe']
  end
end
